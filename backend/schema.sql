-- 1. PROFILES TABLE (linked to Supabase Auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    full_name TEXT
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" 
    ON public.profiles FOR SELECT 
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
    ON public.profiles FOR UPDATE 
    USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
    ON public.profiles FOR INSERT 
    WITH CHECK (auth.uid() = id);

-- Trigger to automatically create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name)
    VALUES (new.id, new.raw_user_meta_data->>'full_name');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- 2. BIOMARKERS TABLE (saves lab report extracts)
CREATE TABLE IF NOT EXISTS public.biomarkers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    value NUMERIC NOT NULL,
    unit TEXT NOT NULL,
    ref_range TEXT,
    test_date DATE NOT NULL,
    lab_provider TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.biomarkers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can query their own biomarkers" 
    ON public.biomarkers FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own biomarkers" 
    ON public.biomarkers FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own biomarkers" 
    ON public.biomarkers FOR DELETE 
    USING (auth.uid() = user_id);


-- 3. SYMPTOMS LOG TABLE
CREATE TABLE IF NOT EXISTS public.symptom_logs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    intensity INTEGER CHECK (intensity >= 1 AND intensity <= 5) NOT NULL,
    logged_at DATE DEFAULT CURRENT_DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.symptom_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can query their own symptoms" 
    ON public.symptom_logs FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own symptoms" 
    ON public.symptom_logs FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own symptoms" 
    ON public.symptom_logs FOR DELETE 
    USING (auth.uid() = user_id);
