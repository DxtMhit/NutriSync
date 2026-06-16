export const individualTests = [
  {
    category: "Fat-Soluble Vitamins",
    tests: [
      {
        name: "Vitamin D (25-OH Total)", aka: "25-Hydroxyvitamin D",
        measures: "The main circulating form of Vitamin D — reflects both dietary intake and sun synthesis.",
        optimal: "40–60 ng/mL (100–150 nmol/L). Deficient <20, Insufficient 20–29.",
        fasting: "No",
        importance: "Critical — the most commonly deficient nutrient in India. Low levels linked to bone loss, poor immunity, depression, diabetes risk.",
        price: "₹700–₹1,400",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/vitamin-d" },
          { name: "Thyrocare", url: "https://www.thyrocare.com/test/vitamin-d" },
          { name: "Redcliffe Labs", url: "https://redcliffelabs.com/vitamin-d-test" },
          { name: "1mg Labs", url: "https://www.1mg.com/labs/test/vitamin-d-25-hydroxy-35018" },
        ]
      },
      {
        name: "Vitamin A (Retinol)", aka: "Serum Retinol",
        measures: "Active Vitamin A (retinol) in blood. Does NOT measure beta-carotene conversion.",
        optimal: "30–80 mcg/dL (1.05–2.8 µmol/L).",
        fasting: "Yes (8–10 hrs)",
        importance: "Needed for vision, immunity, iron mobilization. Deficiency common in vegetarians.",
        price: "₹900–₹1,800",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/vitamin-a-retinol" },
          { name: "Thyrocare", url: "https://www.thyrocare.com/test/vitamin-a" },
          { name: "1mg Labs", url: "https://www.1mg.com/labs/test/vitamin-a-35021" },
        ]
      },
      {
        name: "Vitamin E (Alpha-Tocopherol)", aka: "Serum Tocopherol",
        measures: "Alpha-tocopherol concentration in serum.",
        optimal: "5–20 mg/L (11.6–46.4 µmol/L).",
        fasting: "Yes (8–10 hrs)",
        importance: "Key antioxidant protecting cell membranes. Test if on fat-restricted diet or with fat malabsorption.",
        price: "₹1,000–₹2,000",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/vitamin-e" },
          { name: "Thyrocare", url: "https://www.thyrocare.com/test/vitamin-e" },
        ]
      },
      {
        name: "Vitamin K (PIVKA-II)", aka: "PIVKA-II / Serum Vitamin K",
        measures: "PIVKA-II is the most sensitive functional marker of Vitamin K deficiency.",
        optimal: "PIVKA-II <2.0 AU/mL. Serum K1: 0.2–3.2 ng/mL.",
        fasting: "Yes",
        importance: "Rarely tested but important for those on warfarin, or with arterial calcification/poor bone density.",
        price: "₹1,500–₹3,000",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/vitamin-k" },
          { name: "SRL Diagnostics", url: "https://www.srl.in" },
        ]
      },
    ]
  },
  {
    category: "B Vitamins & Methylation",
    tests: [
      {
        name: "Vitamin B12 (Cobalamin)", aka: "Serum Vitamin B12 / Cobalamin",
        measures: "Total serum B12. Note: up to 20% of 'normal' results can still have functional deficiency — combine with MMA or homocysteine for accuracy.",
        optimal: ">400 pg/mL for neurological protection. Labs flag <200 as deficient; many clinicians use >300 as functional threshold.",
        fasting: "No",
        importance: "Critical in India — very high prevalence of deficiency, especially vegetarians, elderly, and PPI users.",
        price: "₹500–₹1,000",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/vitamin-b-12" },
          { name: "Thyrocare", url: "https://www.thyrocare.com/test/vitamin-b-12" },
          { name: "Redcliffe Labs", url: "https://redcliffelabs.com/vitamin-b12-test" },
          { name: "1mg Labs", url: "https://www.1mg.com/labs/test/vitamin-b12-35019" },
        ]
      },
      {
        name: "Folate / Folic Acid (B9)", aka: "Serum Folate / RBC Folate",
        measures: "Serum folate reflects recent intake. RBC folate reflects longer-term stores — more clinically meaningful.",
        optimal: "Serum: 3–17 ng/mL. RBC folate: 140–628 ng/mL.",
        fasting: "Yes (8 hrs)",
        importance: "Critical during pregnancy (neural tube defects). Also key for MTHFR variant testing and methylation assessment.",
        price: "₹500–₹900",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/folic-acid" },
          { name: "Thyrocare", url: "https://www.thyrocare.com/test/folic-acid" },
          { name: "1mg Labs", url: "https://www.1mg.com/labs/test/folic-acid-35013" },
        ]
      },
      {
        name: "Homocysteine (Serum)", aka: "Homocysteine Quantitative",
        measures: "Amino acid produced when B12, B9, and B6 are inadequate. Elevated = methylation problem. Best combined functional marker for the B-vitamin trio.",
        optimal: "<7 µmol/L (optimal). >15 is high-risk; >30 is severe.",
        fasting: "Yes (8–12 hrs preferred)",
        importance: "Elevated homocysteine predicts cardiovascular disease, dementia, stroke, and kidney disease better than cholesterol in many studies. Critical test.",
        price: "₹700–₹1,200",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/homocysteine-quantitative-serum" },
          { name: "Thyrocare", url: "https://www.thyrocare.com/test/homocysteine" },
          { name: "1mg Labs", url: "https://www.1mg.com/labs/test/homocysteine-35015" },
          { name: "Redcliffe Labs", url: "https://redcliffelabs.com/homocysteine-test" },
        ]
      },
      {
        name: "Vitamin B6 (Pyridoxine)", aka: "Plasma PLP / Pyridoxal-5-Phosphate",
        measures: "Plasma PLP (active form) is the most accurate marker.",
        optimal: ">30 nmol/L (plasma PLP).",
        fasting: "Yes",
        importance: "Required for serotonin, dopamine, GABA synthesis. Deficiency causes depression, PMS, anxiety, peripheral neuropathy.",
        price: "₹900–₹1,800",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/vitamin-b6" },
          { name: "SRL Diagnostics", url: "https://www.srl.in" },
        ]
      },
      {
        name: "Vitamin C (Ascorbic Acid)", aka: "Serum Ascorbic Acid",
        measures: "Serum Vitamin C level.",
        optimal: "0.4–2.0 mg/dL. Deficient <0.2 mg/dL.",
        fasting: "Yes",
        importance: "Rarely tested but subclinical deficiency is common in smokers, elderly, and those with poor fruit/vegetable intake.",
        price: "₹800–₹1,500",
        labs: [
          { name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/vitamin-c" },
          { name: "SRL Diagnostics", url: "https://www.srl.in" },
        ]
      },
    ]
  },
  {
    category: "Key Minerals",
    tests: [
      { name: "Serum Calcium", aka: "Total Calcium / Ionized Calcium", measures: "Total calcium in blood. Ionized (free) calcium is more functionally accurate.", optimal: "Total: 8.5–10.2 mg/dL. Ionized: 4.6–5.3 mg/dL.", fasting: "No", importance: "Routine marker included in most health checks. Must always be evaluated alongside Vitamin D and PTH.", price: "₹150–₹400", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/calcium" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/calcium" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/calcium-35006" }] },
      { name: "Serum Magnesium", aka: "Serum Magnesium", measures: "Blood magnesium. Only ~1% of body magnesium is in blood — serum levels can be 'normal' even when cells are depleted. RBC magnesium is more accurate.", optimal: "Serum: 1.7–2.2 mg/dL. RBC Mg: 4.2–6.8 mg/dL.", fasting: "No", importance: "Up to 50% of Indians are below optimal intake. Drives D3 activation, sleep quality, and blood pressure. Serum is often 'normal' even when depleted.", price: "₹250–₹500 (serum) / ₹500–₹900 (RBC)", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/magnesium-serum" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/magnesium" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/magnesium-serum-35032" }] },
      { name: "Iron Studies (Full Panel)", aka: "Serum Iron + TIBC + Ferritin + Transferrin Saturation", measures: "Full picture of iron stores and transport. Serum iron alone is insufficient — ferritin and transferrin saturation are essential.", optimal: "Ferritin: 70–150 ng/mL (optimal). Transferrin saturation: 20–45%. Serum iron: 60–170 mcg/dL.", fasting: "Yes (morning, before supplements)", importance: "India has the highest burden of iron deficiency anemia globally. Ferritin is the single most important iron biomarker.", price: "₹700–₹1,400 (full panel)", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/iron-deficiency-profile" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/iron-deficiency-profile" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/iron-deficiency-profile-35027" }, { name: "Redcliffe Labs", url: "https://redcliffelabs.com/iron-deficiency-profile" }] },
      { name: "Serum Zinc", aka: "Zinc, Serum", measures: "Blood zinc level. Fasting morning sample essential as zinc drops after eating.", optimal: "70–120 mcg/dL (fasting morning).", fasting: "Yes (essential for accuracy)", importance: "Zinc deficiency is widespread in India. Low zinc = impaired immunity, hair loss, poor wound healing, hypogonadism.", price: "₹500–₹1,000", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/zinc" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/zinc" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/zinc-35044" }] },
      { name: "Serum Copper", aka: "Copper, Serum", measures: "Blood copper. Also test ceruloplasmin to assess copper function.", optimal: "Copper: 70–140 mcg/dL. Ceruloplasmin: 18–35 mg/dL.", fasting: "No", importance: "Often missed. Copper deficiency from long-term zinc supplementation mimics B12 deficiency — causes anemia and neuropathy.", price: "₹700–₹1,500", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/copper-serum" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/copper" }] },
      { name: "Serum Selenium", aka: "Selenium, Serum / Plasma", measures: "Blood selenium level.", optimal: "70–150 mcg/L (plasma).", fasting: "No", importance: "Critical for thyroid T4→T3 conversion and antioxidant defense. Indian soils are often selenium-poor.", price: "₹1,200–₹2,500", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/selenium" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/selenium" }, { name: "SRL Diagnostics", url: "https://www.srl.in" }] },
      { name: "Urinary Iodine / Serum Iodine", aka: "Urinary Iodine Excretion (UIE)", measures: "Urinary iodine is the gold standard for population assessment. Serum iodine reflects recent intake.", optimal: "UIE: 100–200 mcg/L (median). Deficient <100 mcg/L.", fasting: "No (urine spot sample)", importance: "Iodine deficiency remains a concern in inland/hill regions of India. Critical for thyroid function and fetal brain development.", price: "₹600–₹1,200", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/iodine-urine" }, { name: "SRL Diagnostics", url: "https://www.srl.in" }, { name: "Metropolis", url: "https://www.metropolisindia.com" }] },
      { name: "Serum Potassium", aka: "Potassium, Serum (Electrolytes)", measures: "Blood potassium. Always check alongside sodium and magnesium.", optimal: "3.5–5.0 mEq/L. Symptoms occur below 3.0.", fasting: "No", importance: "Hypokalemia resistant to supplementation is almost always caused by concurrent magnesium deficiency. Always test Mg with K.", price: "₹100–₹300 (often part of electrolytes panel)", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/electrolytes" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/serum-electrolytes" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/electrolytes-serum-35010" }] },
    ]
  },
  {
    category: "Inflammation Markers",
    tests: [
      { name: "hsCRP (High-Sensitivity CRP)", aka: "C-Reactive Protein, high sensitivity", measures: "Systemic inflammation level. Must be tested alongside iron markers — elevated CRP means low serum iron may be Hepcidin-driven, not true deficiency.", optimal: "<1.0 mg/L (optimal cardiovascular risk). <0.5 mg/L (ideal). >3.0 mg/L = high risk.", fasting: "No (but avoid testing during acute illness — wait 2 weeks after infection)", importance: "Critical safety test before starting iron supplementation. Also a cardiovascular risk marker and a signal to evaluate D3, Magnesium, and Omega-3.", price: "₹400–₹900", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/crp-high-sensitivity" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/crp-hs" }, { name: "Redcliffe Labs", url: "https://redcliffelabs.com/crp-hs-test" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/crp-high-sensitivity-35008" }] },
      { name: "ESR (Erythrocyte Sedimentation Rate)", aka: "Westergren ESR", measures: "A non-specific marker of inflammation — less precise than CRP but cheap and widely available.", optimal: "Men: <15 mm/hr. Women: <20 mm/hr.", fasting: "No", importance: "Useful as a basic inflammation screen. Elevated ESR + normal CRP suggests chronic low-grade issue. Both elevated = more acute inflammation.", price: "₹100–₹250", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/esr" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/esr" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/esr-35011" }] },
    ]
  },
  {
    category: "Blood Sugar & Insulin",
    tests: [
      { name: "Fasting Glucose + HbA1c", aka: "Blood Glucose Fasting / Glycated Haemoglobin", measures: "Fasting glucose = snapshot of current blood sugar. HbA1c = 3-month average blood sugar — the gold standard for diabetes diagnosis and monitoring.", optimal: "Fasting glucose: 70–85 mg/dL (optimal), <100 normal. HbA1c: <5.4% optimal, <5.7% normal.", fasting: "Yes (8–12 hrs for fasting glucose)", importance: "Essential baseline for everyone. Connects directly to Magnesium deficiency — low Mg impairs insulin receptor signaling. Part of the Blood Sugar / Insulin cluster.", price: "₹200–₹500", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/hba1c" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/hba1c" }, { name: "Redcliffe Labs", url: "https://redcliffelabs.com/hba1c-test" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/hba1c-35016" }] },
      { name: "Fasting Insulin + HOMA-IR", aka: "Insulin, Fasting / Insulin Resistance Index", measures: "Fasting insulin reveals insulin resistance years before blood glucose rises. HOMA-IR = (Fasting Glucose × Fasting Insulin) ÷ 405.", optimal: "Fasting insulin: <5 µIU/mL (optimal), <10 normal. HOMA-IR: <1.5 (optimal), <2.5 normal. Values above this = insulin resistance.", fasting: "Yes (10–12 hrs)", importance: "The most sensitive early marker for insulin resistance and metabolic syndrome. Normal HbA1c and fasting glucose can coexist with significant insulin resistance — this test reveals it. Directly links to the Magnesium and Chromium cluster.", price: "₹400–₹800", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/insulin-fasting" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/insulin-fasting" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/insulin-fasting-35025" }] },
    ]
  },
  {
    category: "Lipid Panel & Thyroid",
    tests: [
      { name: "Full Lipid Panel", aka: "Total Cholesterol / LDL / HDL / Triglycerides / VLDL / LDL:HDL ratio", measures: "Complete cardiovascular risk picture. Triglycerides directly indicate Omega-3 and carbohydrate metabolism status. Low HDL indicates Omega-3 and Niacin deficiency contexts.", optimal: "Triglycerides: <100 mg/dL (optimal), <150 normal. HDL: >60 mg/dL. LDL: <100 mg/dL. LDL:HDL ratio: <2.5.", fasting: "Yes (9–12 hrs)", importance: "Bridges directly to supplement decisions: high Triglycerides → EPA/DHA; low HDL → Niacin + Omega-3; high LDL → Berberine, plant sterols. Statin use seen here → must add CoQ10.", price: "₹400–₹900", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/lipid-profile" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/lipid-profile" }, { name: "Redcliffe Labs", url: "https://redcliffelabs.com/lipid-profile-test" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/lipid-profile-35029" }] },
      { name: "Thyroid Full Panel", aka: "TSH + Free T3 + Free T4 + Anti-TPO", measures: "Complete thyroid assessment. TSH alone is insufficient — Free T3 and Free T4 reveal conversion and production issues separately.", optimal: "TSH: 0.5–2.5 mIU/L (optimal). Free T3: 3.1–4.4 pg/mL. Free T4: 1.0–1.8 ng/dL. Anti-TPO: <35 IU/mL.", fasting: "No (morning sample preferred)", importance: "India has high rates of subclinical hypothyroidism and Hashimoto's. Selenium, iodine, iron, and zinc all affect this panel.", price: "₹600–₹1,500", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/thyroid-function-test" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/thyroid-profile-total" }, { name: "Redcliffe Labs", url: "https://redcliffelabs.com/thyroid-test" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/thyroid-function-test-35041" }] },
      { name: "Complete Blood Count (CBC/Hemogram)", aka: "Full Blood Count / CBC with Differential", measures: "RBC count, hemoglobin, MCV, MCH, WBC count, platelet count. Reveals anemia type — microcytic (iron) vs macrocytic (B12/folate).", optimal: "Hb: 13.5–17.5 g/dL (men), 12–15.5 g/dL (women). MCV: 80–100 fL. Elevated MCV = B12/folate deficiency.", fasting: "No", importance: "The first-line screen for nutritional deficiency anemia. Essential baseline for anyone suspecting iron or B12 deficiency.", price: "₹200–₹450", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/complete-blood-count" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/cbc" }, { name: "Redcliffe Labs", url: "https://redcliffelabs.com/cbc-test" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/complete-blood-count-35007" }] },
      { name: "PTH (Parathyroid Hormone)", aka: "Intact PTH / Parathyroid Hormone", measures: "PTH is released when calcium is low. Elevated PTH with low/normal calcium points to Vitamin D deficiency driving the response.", optimal: "10–65 pg/mL. High PTH + low D = secondary hyperparathyroidism from D deficiency.", fasting: "Morning, fasting preferred", importance: "Use alongside Vitamin D test to understand calcium/bone metabolism fully. Elevated PTH even with 'normal' D often means D is functionally insufficient.", price: "₹700–₹1,400", labs: [{ name: "Dr Lal PathLabs", url: "https://www.lalpathlabs.com/pathology-test/parathyroid-hormone-pth" }, { name: "Thyrocare", url: "https://www.thyrocare.com/test/parathyroid-hormone" }, { name: "1mg Labs", url: "https://www.1mg.com/labs/test/parathyroid-hormone-pth-35034" }] },
    ]
  }
];
