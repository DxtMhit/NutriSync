export const vitamins = [
  {
    symbol: "A", fullName: "Vitamin A (Retinol)", aka: "Retinol / Retinal / Retinoic Acid / Beta-Carotene (provitamin)",
    colorClass: "bg-green", borderClass: "border-green", textClass: "c-green",
    function: "Vision (retinal is part of rhodopsin in the retina), immune function (maintains mucosal barriers), skin/cell growth, reproduction, gene transcription, antioxidant activity (beta-carotene form).",
    deficiency: "Night blindness, dry eyes (xerophthalmia), impaired immunity, rough/dry skin, poor wound healing, increased infection susceptibility.",
    sources: ["🥩 Beef liver (highest)", "🐟 Cod liver oil", "🥚 Egg yolks", "🧈 Butter/Ghee", "🍠 Sweet potato (beta-carotene)", "🥕 Carrot", "🥬 Kale/Spinach"],
    codeps: ["Zinc (RBP transport)", "Vitamin D (balance — antagonist at high doses)", "Iron (mobilization)", "Fat (absorption)"],
    notes: "Retinol (animal-sourced) is directly bioavailable. Beta-carotene (plants) requires conversion — but up to 45% of people carry BCMO1 gene variants that impair this conversion severely. Those people cannot rely on plant sources alone.",
    dose: "RDA: 700–900 mcg RAE/day. Upper limit: 3,000 mcg preformed retinol."
  },
  {
    symbol: "B1", fullName: "Vitamin B1 (Thiamine)", aka: "Thiamine / Aneurine",
    colorClass: "bg-blue", borderClass: "border-blue", textClass: "c-blue",
    function: "Carbohydrate metabolism (pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase), nerve function, ATP production, acetylcholine synthesis.",
    deficiency: "Beriberi (wet — cardiac; dry — neurological), Wernicke-Korsakoff syndrome (in alcoholics), fatigue, poor memory, muscle weakness, heart failure.",
    sources: ["🐷 Pork", "🌻 Sunflower seeds", "🐟 Trout", "🫘 Black beans", "🌾 Whole grains", "🥜 Macadamia nuts"],
    codeps: ["Magnesium (cofactor)", "B2 (Riboflavin)", "B3 (Niacin)", "Alpha-lipoic acid"],
    notes: "Destroyed by heat, sulfites, and alkaline conditions. Raw fish contains thiaminase which destroys B1. Alcohol dramatically depletes thiamine. High carbohydrate intake increases B1 requirement.",
    dose: "RDA: 1.1–1.2 mg/day."
  },
  {
    symbol: "B2", fullName: "Vitamin B2 (Riboflavin)", aka: "Riboflavin",
    colorClass: "bg-gold", borderClass: "border-gold", textClass: "c-gold",
    function: "FAD/FMN cofactor for energy production, glutathione recycling (glutathione reductase), MTHFR enzyme function, iron metabolism, antioxidant defense.",
    deficiency: "Ariboflavinosis: cracked lips (angular cheilitis), sore throat, skin inflammation, anemia, light sensitivity, impaired MTHFR function.",
    sources: ["🥩 Beef liver", "🥛 Milk/Yogurt", "🌰 Almonds", "🥚 Eggs", "🍄 Mushrooms", "🌿 Spinach"],
    codeps: ["MTHFR enzyme (critical for folate activation)", "Glutathione (recycling)", "Iron (metabolism)", "B3 (Niacin — synthesized from tryptophan using B2)"],
    notes: "Light-sensitive — milk in clear containers loses riboflavin. Especially important for the ~40% of people with MTHFR gene variants. Supports migraine prevention at 400 mg/day in clinical trials.",
    dose: "RDA: 1.1–1.3 mg/day."
  },
  {
    symbol: "B3", fullName: "Vitamin B3 (Niacin)", aka: "Niacin / Nicotinic Acid / Niacinamide / NAD⁺",
    colorClass: "bg-amber", borderClass: "border-amber", textClass: "c-amber",
    function: "NAD⁺/NADH and NADP⁺/NADPH — central to energy metabolism, DNA repair, cell signaling, cholesterol metabolism, serotonin synthesis.",
    deficiency: "Pellagra (4 D's: Dermatitis, Diarrhea, Dementia, Death). Subclinical: fatigue, depression, poor digestion, skin sensitivity.",
    sources: ["🐟 Tuna/Salmon", "🐔 Chicken/Turkey", "🥩 Beef liver", "🥜 Peanuts", "🍄 Mushrooms", "🥑 Avocado"],
    codeps: ["Tryptophan (precursor — 60 mg Trp ≈ 1 mg niacin)", "B6 (tryptophan conversion)", "B2 (tryptophan conversion)", "Iron (tryptophan conversion)"],
    notes: "Flush niacin (nicotinic acid) raises HDL cholesterol by 15–35% at therapeutic doses (1–3g/day). Niacinamide form doesn't cause flushing but also doesn't raise HDL. Shares the tryptophan pathway with serotonin — high niacin demand steals tryptophan from serotonin.",
    dose: "RDA: 14–16 mg NE/day. Therapeutic: 1–3g/day (flush niacin for lipids — under supervision)."
  },
  {
    symbol: "B5", fullName: "Vitamin B5 (Pantothenic Acid)", aka: "Pantothenic Acid / Pantothenate",
    colorClass: "bg-teal", borderClass: "border-teal", textClass: "c-teal",
    function: "Component of Coenzyme A (CoA) — essential for fatty acid synthesis, steroid hormones, neurotransmitters, hemoglobin, melatonin. Involved in all macronutrient metabolism.",
    deficiency: "Extremely rare ('pantothen' = everywhere). Burning feet syndrome, fatigue, irritability, GI disturbances.",
    sources: ["🥩 Beef liver", "🐔 Chicken", "🌻 Sunflower seeds", "🥑 Avocado", "🍄 Shiitake mushrooms", "🥦 Broccoli"],
    codeps: ["CoA (is the core component)", "B1, B2, B3 (energy metabolism partners)", "Vitamin C (adrenal function)"],
    notes: "Widely available in foods — hence deficiency is rare. Important for adrenal function and cortisol production. Dexpanthenol (B5 derivative) used topically for wound healing.",
    dose: "AI: 5 mg/day."
  },
  {
    symbol: "B6", fullName: "Vitamin B6 (Pyridoxine)", aka: "Pyridoxine / Pyridoxal / P5P (Pyridoxal-5-Phosphate)",
    colorClass: "bg-purple", borderClass: "border-purple", textClass: "c-purple",
    function: "Cofactor for 150+ enzymes. Neurotransmitter synthesis (serotonin, dopamine, GABA, norepinephrine, melatonin), homocysteine metabolism, hemoglobin synthesis, glycogen breakdown, immune function.",
    deficiency: "Depression, confusion, neuropathy, anemia, weakened immunity, PMS symptoms, seizures (infants), glossitis.",
    sources: ["🐟 Tuna/Salmon", "🐔 Chicken/Turkey", "🥩 Beef liver", "🍌 Banana", "🥔 Potato", "🌻 Sunflower seeds"],
    codeps: ["Zinc (converts B6 → active P5P)", "Magnesium (synergistic — neurotransmitters)", "B12 + Folate (methylation cycle)", "Iron"],
    notes: "P5P is the active coenzyme form — best for those with liver issues or MTHFR variants. High-dose pyridoxine (not P5P) above 200 mg/day can cause peripheral neuropathy. Always use P5P form for supplementation.",
    dose: "RDA: 1.3–2.0 mg/day. Upper limit: 100 mg/day (pyridoxine)."
  },
  {
    symbol: "B7", fullName: "Vitamin B7 (Biotin)", aka: "Biotin / Vitamin H",
    colorClass: "bg-green", borderClass: "border-green", textClass: "c-green",
    function: "Cofactor for carboxylase enzymes (gluconeogenesis, fatty acid synthesis, amino acid catabolism). Gene regulation, cell signaling.",
    deficiency: "Rare. Hair loss, brittle nails, scaly skin rash, depression, fatigue. Raw egg whites (avidin) bind biotin and can cause deficiency.",
    sources: ["🥚 Egg yolks (cooked)", "🥩 Beef liver", "🐟 Salmon", "🌻 Sunflower seeds", "🍠 Sweet potato", "🌰 Almonds"],
    codeps: ["B5 (Pantothenic Acid — metabolic partner)", "Magnesium", "Manganese"],
    notes: "Biotin supplementation (even at modest doses) dramatically interferes with many lab tests — especially thyroid (TSH, Free T4), troponin, and hormone assays. Always stop biotin 48–72 hours before any blood test.",
    dose: "AI: 30 mcg/day."
  },
  {
    symbol: "B9", fullName: "Vitamin B9 (Folate)", aka: "Folate / Folic Acid / 5-MTHF (Methylfolate)",
    colorClass: "bg-green", borderClass: "border-green", textClass: "c-green",
    function: "DNA synthesis and repair, cell division, methylation cycle (methionine synthase), red blood cell formation, neural tube development (fetus), homocysteine clearance.",
    deficiency: "Megaloblastic anemia, neural tube defects (pregnancy), elevated homocysteine, depression, cognitive decline, glossitis.",
    sources: ["🥬 Spinach/Romaine", "🫘 Lentils/Black beans", "🥦 Asparagus/Broccoli", "🥑 Avocado", "🥩 Beef liver", "🥚 Eggs"],
    codeps: ["B12 (folate trap — B12 required to activate folate)", "B6 (homocysteine clearance)", "B2 (MTHFR enzyme function)", "Zinc"],
    notes: "5-MTHF (methylfolate) is the bioactive form — crosses blood-brain barrier directly. Synthetic folic acid requires multiple conversion steps and can block folate receptors in MTHFR variant carriers. Always choose methylfolate over folic acid.",
    dose: "RDA: 400 mcg DFE/day. Pregnancy: 600 mcg/day."
  },
  {
    symbol: "B12", fullName: "Vitamin B12 (Cobalamin)", aka: "Methylcobalamin / Adenosylcobalamin / Cyanocobalamin",
    colorClass: "bg-rose", borderClass: "border-rose", textClass: "c-rose",
    function: "Methylation cycle (methionine synthase), DNA synthesis, myelin sheath maintenance (nervous system), red blood cell maturation, homocysteine clearance, energy metabolism.",
    deficiency: "Megaloblastic/pernicious anemia, peripheral neuropathy, cognitive decline/dementia, depression, fatigue, glossitis, balance problems, memory loss.",
    sources: ["🦀 Clams (highest)", "🥩 Beef liver", "🐟 Sardines/Mackerel", "🥩 Beef/Lamb", "🐟 Salmon/Tuna", "🥛 Dairy/Eggs"],
    codeps: ["Folate (B9 — folate trap)", "B6 (homocysteine pathway)", "B2 (MTHFR support)", "Intrinsic Factor (absorption)"],
    notes: "Almost exclusively in animal foods — vegans MUST supplement. Methylcobalamin is the neurologically active form. Requires Intrinsic Factor (stomach protein) for absorption — sublingual or injected forms bypass this. Serum B12 alone misses 20% of deficiency cases — test MMA and homocysteine for accuracy.",
    dose: "RDA: 2.4 mcg/day. Therapeutic: 1,000–5,000 mcg/day sublingual."
  },
  {
    symbol: "C", fullName: "Vitamin C (Ascorbic Acid)", aka: "Ascorbic Acid / L-Ascorbate",
    colorClass: "bg-amber", borderClass: "border-amber", textClass: "c-amber",
    function: "Collagen synthesis, antioxidant, immune function (neutrophil function, lymphocyte proliferation), iron absorption enhancer (Fe³⁺→Fe²⁺), regenerates Vitamin E, carnitine synthesis, neurotransmitter synthesis.",
    deficiency: "Scurvy (bleeding gums, poor wound healing, bruising, fatigue, joint pain), impaired immunity, depression.",
    sources: ["🌶️ Red bell pepper", "🥝 Kiwi", "🍊 Citrus", "🍓 Strawberries", "🥦 Broccoli", "🌿 Parsley", "🍍 Papaya", "🫐 Guava"],
    codeps: ["Iron (absorption)", "Vitamin E (regeneration)", "Copper (modulates)", "Glutathione"],
    notes: "Water-soluble; not stored in body. Humans cannot synthesize Vitamin C (we lost the GULO enzyme). Smokers need 35 mg/day extra. Very high dose C (>1g) can reduce copper absorption.",
    dose: "RDA: 75–90 mg/day. Many researchers suggest 200–500 mg for optimal tissue saturation."
  },
  {
    symbol: "D3", fullName: "Vitamin D3 (Cholecalciferol)", aka: "Cholecalciferol / Calcitriol (active)",
    colorClass: "bg-gold", borderClass: "border-gold", textClass: "c-gold",
    function: "Calcium and phosphorus absorption, bone mineralization, immune regulation (T-cell modulation), insulin secretion, cardiovascular function, gene expression (1,000+ genes).",
    deficiency: "Rickets (children), osteomalacia/osteoporosis, impaired immunity, depression, muscle weakness, increased cancer and autoimmune disease risk.",
    sources: ["☀️ Sunlight (UVB on skin)", "🐟 Fatty fish (mackerel, salmon)", "🥩 Beef liver", "🥚 Egg yolks", "🍄 UV-exposed mushrooms", "🐟 Cod liver oil"],
    codeps: ["K2 (calcium direction)", "Magnesium (activation)", "Calcium", "Zinc", "Vitamin A (balance)"],
    notes: "Synthesized in skin from UVB light — requires 15–30 min midday sun on large skin area. Dark skin, sunscreen, aging, and latitude all reduce synthesis. Blood test (25-OH-D) recommended; optimal level ~40–60 ng/mL.",
    dose: "RDA: 600–800 IU. Many clinicians use 2,000–5,000 IU/day. Test regularly."
  },
  {
    symbol: "E", fullName: "Vitamin E (Tocopherol)", aka: "Alpha-Tocopherol (8 forms total)",
    colorClass: "bg-amber", borderClass: "border-amber", textClass: "c-amber",
    function: "Fat-soluble antioxidant protecting cell membranes from lipid peroxidation. Immune signaling, platelet aggregation regulation, gene expression, protects polyunsaturated fatty acids.",
    deficiency: "Rare; seen in fat malabsorption syndromes. Peripheral neuropathy, muscle weakness, immune dysfunction, retinal degeneration.",
    sources: ["🌻 Sunflower seeds", "🌰 Almonds", "🫒 Wheat germ oil", "🌻 Sunflower oil", "🥜 Peanut butter", "🌿 Spinach", "🥦 Broccoli"],
    codeps: ["Vitamin C (regenerates E)", "Selenium (spares E)", "CoQ10 (synergistic)", "Zinc", "Vitamin K (antagonist at high E)"],
    notes: "All 8 forms (4 tocopherols + 4 tocotrienols) have distinct roles. Synthetic d,l-alpha-tocopherol has only 50% activity of natural d-alpha-tocopherol. Protects omega-3s from oxidation — important when supplementing fish oil.",
    dose: "RDA: 15 mg/day. Upper limit: 1,000 mg/day (increased bleeding risk above this)."
  },
  {
    symbol: "K2", fullName: "Vitamin K2 (Menaquinone)", aka: "Phylloquinone (K1) / Menaquinone (K2) — MK-4, MK-7",
    colorClass: "bg-rose", borderClass: "border-rose", textClass: "c-rose",
    function: "Activates osteocalcin (calcium deposition into bone), activates Matrix GLA Protein (removes calcium from arteries), involved in blood clotting, cell growth regulation.",
    deficiency: "Increased arterial calcification, poor bone density, increased fracture risk, poor blood clotting.",
    sources: ["🫘 Natto (fermented soy — highest K2)", "🧀 Hard cheeses (gouda)", "🥩 Goose liver paste", "🥩 Grass-fed meat", "🧈 Butter/Ghee (grass-fed)", "🥚 Egg yolks", "🥬 Fermented vegetables"],
    codeps: ["D3 (calcium traffic partner)", "Calcium", "Magnesium", "Vitamin A", "Vitamin E (antagonist in excess)"],
    notes: "K1 (phylloquinone) from leafy greens primarily supports clotting. K2 MK-7 (from fermented foods) has the longest half-life and most potent bone/artery benefits. Warfarin blocks all K — patients on warfarin should not supplement K without supervision.",
    dose: "No established RDA. Common therapeutic range: 100–200 mcg MK-7/day."
  }
];
