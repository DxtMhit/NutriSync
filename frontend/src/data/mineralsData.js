export const minerals = [
  {
    symbol: "Mg", fullName: "Magnesium", colorClass: "bg-purple", borderClass: "border-purple", textClass: "c-purple",
    function: "Cofactor for 300+ enzymes. ATP activation, protein synthesis, muscle and nerve function, blood glucose control, blood pressure regulation, Vitamin D activation, DNA repair.",
    deficiency: "Muscle cramps/spasms, anxiety, insomnia, constipation, migraine, high blood pressure, poor Vitamin D response, cardiac arrhythmia.",
    sources: ["🥬 Dark leafy greens (spinach)", "🎃 Pumpkin seeds", "🍫 Dark chocolate (70%+)", "🥑 Avocado", "🍌 Banana", "🌰 Almonds/Cashews", "🫘 Black beans", "🐟 Mackerel"],
    codeps: ["Vitamin D (activation)", "B6 (cellular transport)", "Potassium (pump function)", "Calcium (balance)", "ATP"],
    notes: "Most bioavailable forms: glycinate (sleep/anxiety), malate (energy/pain), threonate (brain). Avoid oxide — low absorption. Up to 50% of the population is below recommended intake.",
    dose: "RDA: 310–420 mg/day."
  },
  {
    symbol: "Ca", fullName: "Calcium", colorClass: "bg-blue", borderClass: "border-blue", textClass: "c-blue",
    function: "Bone and tooth structure (99% stored there), muscle contraction, nerve signal transmission, blood clotting, enzyme activation, cell signaling.",
    deficiency: "Osteoporosis, muscle cramps, poor dental health, cardiac arrhythmia, hypocalcemic tetany.",
    sources: ["🥛 Dairy (milk, yogurt, cheese)", "🐟 Sardines (with bones)", "🥬 Kale / Collard greens", "🫘 White beans", "🐚 Oysters", "🌰 Almonds", "🥦 Broccoli", "🍊 Fortified OJ"],
    codeps: ["D3 (absorption ↑20×)", "K2 (directs to bone)", "Magnesium (balance, competes)", "Phosphorus", "Vitamin A"],
    notes: "Calcium carbonate requires stomach acid for absorption — take with food. Calcium citrate absorbs without acid — better for those on PPIs. Excess calcium without K2 increases arterial calcification risk.",
    dose: "RDA: 1,000–1,200 mg/day."
  },
  {
    symbol: "Fe", fullName: "Iron", colorClass: "bg-rose", borderClass: "border-rose", textClass: "c-rose",
    function: "Hemoglobin synthesis (oxygen transport), myoglobin (muscle oxygen storage), electron transport chain, thyroid peroxidase, dopamine/serotonin synthesis, immune cell production.",
    deficiency: "Iron deficiency anemia (fatigue, pallor, shortness of breath), poor cognitive function, impaired thyroid function, restless leg syndrome, cold intolerance.",
    sources: ["🥩 Beef liver (heme iron)", "🐚 Oysters (heme iron)", "🥩 Red meat (heme iron)", "🫘 Lentils (non-heme)", "🌿 Spinach (non-heme)", "🍫 Dark chocolate", "🥜 Pumpkin seeds"],
    codeps: ["Vitamin C (↑absorption)", "Copper (mobilization)", "Vitamin A (storage)", "Zinc (competes — take separately)"],
    notes: "Heme iron (from meat) absorbs at 15–35%. Non-heme iron (plants): 2–20%, greatly enhanced by Vitamin C. Calcium, tannins (tea/coffee), and phytates (grains) all reduce iron absorption. Excess iron is pro-oxidant — test ferritin before supplementing.",
    dose: "RDA: 8 mg (men), 18 mg (premenopausal women), 27 mg (pregnancy)."
  },
  {
    symbol: "Zn", fullName: "Zinc", colorClass: "bg-teal", borderClass: "border-teal", textClass: "c-teal",
    function: "Cofactor for 300+ enzymes, immune function, protein/DNA synthesis, wound healing, taste/smell, testosterone production, conversion of B6 to P5P, insulin storage.",
    deficiency: "Impaired immunity, poor wound healing, hair loss, loss of taste/smell, hypogonadism, growth retardation, dermatitis, depression.",
    sources: ["🐚 Oysters (highest)", "🥩 Beef", "🐔 Pumpkin seeds", "🌻 Hemp seeds", "🫘 Lentils", "🥛 Dairy", "🌰 Cashews", "🍫 Dark chocolate"],
    codeps: ["Copper (antagonist — 8:1 ratio)", "Iron (competes)", "B6 (needed to activate B6→P5P)", "Vitamin A", "Selenium"],
    notes: "Phytates in grains and legumes bind zinc — soaking/sprouting increases absorption. Vegetarians have higher zinc requirements. Zinc >40 mg/day without copper causes copper deficiency.",
    dose: "RDA: 8–11 mg/day. Max tolerable: 40 mg/day."
  },
  {
    symbol: "Se", fullName: "Selenium", colorClass: "bg-teal", borderClass: "border-teal", textClass: "c-teal",
    function: "Antioxidant via glutathione peroxidase, iodothyronine deiodinases (T4→T3 conversion), DNA synthesis, immune function, male fertility (spermogenesis), heavy metal detox.",
    deficiency: "Keshan disease (heart disease), Kashin-Beck disease (osteoarthropathy), impaired thyroid function, poor antioxidant defense, male infertility.",
    sources: ["🌰 Brazil nuts (1–2 nuts = daily dose)", "🐟 Yellowfin tuna", "🦐 Shrimp", "🥩 Beef", "🐔 Turkey", "🥚 Eggs", "🌾 Whole grains"],
    codeps: ["Iodine (thyroid)", "Vitamin E (synergistic antioxidant)", "Glutathione", "Zinc"],
    notes: "Soil selenium content varies enormously by region — people in low-selenium areas may need supplementation. 1–2 Brazil nuts provide the full daily dose (~55 mcg). Toxicity occurs above 400 mcg/day.",
    dose: "RDA: 55 mcg/day. Upper limit: 400 mcg/day."
  },
  {
    symbol: "I", fullName: "Iodine", colorClass: "bg-teal", borderClass: "border-teal", textClass: "c-teal",
    function: "Essential component of thyroid hormones T3 and T4, which regulate metabolic rate, growth, brain development (fetal), body temperature, and protein synthesis.",
    deficiency: "Goiter (thyroid enlargement), hypothyroidism, cretinism (severe fetal deficiency), cognitive impairment, fatigue.",
    sources: ["🌿 Seaweed (kelp — very high)", "🦞 Cod / Seafood", "🥛 Dairy", "🥚 Eggs", "🧂 Iodized salt", "🍠 Potatoes (with skin)"],
    codeps: ["Selenium (T4→T3 conversion)", "Iron (thyroid peroxidase)", "Zinc", "Vitamin D"],
    notes: "Goitrogenic foods (raw cruciferous vegetables, soy) can interfere with iodine utilization in the thyroid — cooking largely deactivates goitrogens. Do not supplement high-dose iodine without selenium.",
    dose: "RDA: 150 mcg/day. Pregnancy: 220 mcg/day."
  },
  {
    symbol: "K⁺", fullName: "Potassium", colorClass: "bg-green", borderClass: "border-green", textClass: "c-green",
    function: "Electrolyte — maintains cellular resting potential, heart rhythm, muscle contraction, nerve transmission, blood pressure regulation, kidney function, glycogen/protein synthesis.",
    deficiency: "Hypokalemia: muscle weakness/cramps, constipation, cardiac arrhythmia, fatigue, elevated blood pressure.",
    sources: ["🍌 Banana", "🥔 Potato (with skin)", "🥬 Spinach / Beet greens", "🧆 Lentils / White beans", "🥑 Avocado", "🍠 Sweet potato", "🐟 Salmon", "🫙 Yogurt"],
    codeps: ["Magnesium (Na⁺/K⁺-ATPase pump — potassium supplementation fails without Mg)", "Sodium (balance)", "B6 (cellular uptake)"],
    notes: "Refractory hypokalemia (potassium that won't correct with supplements) is almost always caused by magnesium deficiency. Fix magnesium first. High sodium intake increases potassium excretion.",
    dose: "AI: 2,600–3,400 mg/day. Most Western diets are deficient."
  },
  {
    symbol: "Na", fullName: "Sodium", colorClass: "bg-amber", borderClass: "border-amber", textClass: "c-amber",
    function: "Primary extracellular cation. Fluid balance, nerve impulse transmission, muscle contraction, nutrient absorption in gut, blood pressure.",
    deficiency: "Hyponatremia: nausea, headache, confusion, seizures, coma. Common in endurance athletes (overhydration).",
    sources: ["🧂 Table salt", "🫙 Pickled/fermented foods", "🥩 Processed meats", "🧀 Cheese", "🍞 Bread"],
    codeps: ["Potassium (inverse relationship)", "Magnesium (pump)", "Chloride (co-ion)"],
    notes: "The sodium:potassium ratio matters more than absolute sodium. High sodium with low potassium is the cardiovascular risk driver — not sodium alone. Low-carb/ketogenic diets increase sodium excretion.",
    dose: "AI: 1,500 mg/day. Upper limit: 2,300 mg/day."
  },
  {
    symbol: "Cu", fullName: "Copper", colorClass: "bg-amber", borderClass: "border-amber", textClass: "c-amber",
    function: "Ceruloplasmin (iron transport), dopamine-β-hydroxylase (dopamine→norepinephrine), cytochrome c oxidase (mitochondrial energy), collagen crosslinking, antioxidant (SOD), melanin synthesis.",
    deficiency: "Anemia (iron-resistant), neuropathy (mimics B12 deficiency), poor immune function, depigmentation, cardiovascular disease.",
    sources: ["🐚 Oysters (extremely high)", "🫘 Sesame seeds / tahini", "🍫 Dark chocolate", "🥜 Cashews", "🥩 Beef liver", "🦀 Crab", "🌿 Spirulina"],
    codeps: ["Iron (ceruloplasmin function)", "Zinc (antagonist — monitor ratio)", "Vitamin C (high doses reduce copper)"],
    notes: "Zinc supplementation above 40 mg/day consistently depletes copper. Zinc:copper ratio should be maintained at ~8:1. Many multivitamins contain inadequate copper. Copper IUDs can increase body copper.",
    dose: "RDA: 900 mcg/day."
  },
  {
    symbol: "Mn", fullName: "Manganese", colorClass: "bg-amber", borderClass: "border-amber", textClass: "c-amber",
    function: "Cofactor for arginase (urea cycle), mitochondrial superoxide dismutase (MnSOD — antioxidant), bone formation, carbohydrate metabolism, thyroid hormone synthesis.",
    deficiency: "Rare. Poor bone density, impaired glucose tolerance, altered lipid metabolism, reproductive dysfunction.",
    sources: ["🌾 Whole grains", "🍵 Tea (high source)", "🫘 Legumes", "🌰 Nuts and seeds", "🍍 Pineapple", "🥦 Dark leafy greens"],
    codeps: ["Iron (competes for absorption)", "Zinc", "Calcium"],
    notes: "Iron and manganese share the same DMT1 transporter — iron deficiency increases manganese absorption and vice versa. Most people get adequate manganese from whole grains.",
    dose: "AI: 1.8–2.3 mg/day."
  },
  {
    symbol: "Cr", fullName: "Chromium", colorClass: "bg-green", borderClass: "border-green", textClass: "c-green",
    function: "Potentiates insulin signaling (enhances insulin receptor binding), glucose metabolism, lipid metabolism, protein synthesis.",
    deficiency: "Impaired glucose tolerance, insulin resistance, elevated blood lipids. Difficult to diagnose — no reliable biomarker.",
    sources: ["🥦 Broccoli (highest)", "🥩 Beef", "🦐 Shrimp", "🌾 Whole grains", "🫙 Nutritional yeast", "🍇 Grape juice", "🥚 Eggs"],
    codeps: ["Insulin", "Zinc", "Niacin (B3 — chromium works as chromodulin with niacin)"],
    notes: "Chromium picolinate is the most researched supplemental form. Evidence for supplementation is strongest in type 2 diabetes and insulin resistance.",
    dose: "AI: 20–35 mcg/day."
  },
  {
    symbol: "P", fullName: "Phosphorus", colorClass: "bg-blue", borderClass: "border-blue", textClass: "c-blue",
    function: "Bone and tooth structure (with calcium), ATP (energy currency), cell membrane structure (phospholipids), DNA/RNA backbone, pH buffering, cellular signaling.",
    deficiency: "Rare in modern diet. Weakness, bone pain, poor growth, impaired immune function. Hypophosphatemia occurs with malnutrition or refeeding syndrome.",
    sources: ["🥩 Meat / Poultry / Fish", "🥛 Dairy", "🥚 Eggs", "🌰 Nuts and seeds", "🫘 Legumes", "🌾 Whole grains"],
    codeps: ["Calcium (ratio matters — Ca:P should be ~1:1 to 2:1)", "Vitamin D (absorption)", "Magnesium"],
    notes: "Most Westerners get excess phosphorus (from processed foods, phosphate additives). Too much phosphorus relative to calcium depletes calcium from bones. Many soft drinks are very high in phosphorus.",
    dose: "RDA: 700 mg/day."
  }
];
