export const labPackages = [
  {
    lab: "Thyrocare",
    logo: "🔬",
    tagline: "India's largest automated diagnostic chain — 3,000+ cities",
    packages: [
      {
        name: "Vitamin B12 + Vitamin D Combo",
        tests: 2,
        includes: "Vitamin D (25-OH Total), Vitamin B12",
        price: "₹859",
        bestFor: "Quick check on India's two most common deficiencies",
        url: "https://www.thyrocare.com",
        highlight: false
      },
      {
        name: "Complete Vitamins Profile",
        tests: 14,
        includes: "Vitamin A, D (Total, D2, D3), E, K, B1, B2, B3, B5, B6, B7, B9 (Folate), B12",
        price: "₹2,299",
        bestFor: "Complete vitamins-only assessment. No minerals included.",
        url: "https://www.thyrocare.com/profile/complete%20vitamins%20profile",
        highlight: false
      },
      {
        name: "Vitamins & Minerals Profile",
        tests: 22,
        includes: "All vitamins + Calcium, Magnesium, Zinc, Selenium, Iron, Potassium, Sodium, Chloride",
        price: "₹3,000",
        bestFor: "Most complete single deficiency panel available in India",
        url: "https://bookmytest.co.in/health-checkup-packages/vitamins-minerals-profile",
        highlight: true
      },
      {
        name: "Aarogyam Advanced (78 Tests)",
        tests: 78,
        includes: "CBC, Lipid, Liver, Kidney, Thyroid, Vitamin D, Vitamin B12, Iron Panel, Electrolytes, Cardiac risk markers",
        price: "₹1,589",
        bestFor: "Best value annual health check — covers most critical markers",
        url: "https://www.thyrocare.com",
        highlight: true
      },
      {
        name: "Aarogyam C (103 Tests)",
        tests: 103,
        includes: "All of Advanced + 14 Vitamins, Homocysteine, Folate, Ferritin, Testosterone, Element toxicity (22 heavy metals)",
        price: "₹2,299",
        bestFor: "Comprehensive annual check including vitamins and toxicity screening",
        url: "https://www.thyrocare.com",
        highlight: false
      },
      {
        name: "Aarogyam 1.5 (106 Tests)",
        tests: 106,
        includes: "All of C + Insulin Fasting, Cystatin C, Pancreas Profile, Bone disorders",
        price: "₹3,199",
        bestFor: "Most complete routine annual package — includes bone, metabolic, and vitamin markers",
        url: "https://www.thyrocare.com/profile/aarogyam-1_5-with-utsh",
        highlight: false
      },
    ]
  },
  {
    lab: "Dr Lal PathLabs",
    logo: "🏥",
    tagline: "India's largest listed diagnostic chain — NABL accredited",
    packages: [
      {
        name: "Vitamin D Comprehensive",
        tests: 4,
        includes: "Vitamin D Total (25-OH), Vitamin D2, Vitamin D3, Vitamin D Insufficiency/Deficiency assessment",
        price: "₹2,210",
        bestFor: "Detailed Vitamin D fractionation — D2 vs D3 split",
        url: "https://www.lalpathlabs.com/pathology-test/vitamin-d-comprehensive",
        highlight: false
      },
      {
        name: "Swasthfit Vitamin Health Checkup",
        tests: 16,
        includes: "Vitamin D, B12, Folate, Iron Panel (Ferritin, TIBC, Iron), CBC, Calcium, Blood Sugar",
        price: "₹1,800–₹2,500",
        bestFor: "Practical deficiency-focused panel for most people",
        url: "https://www.lalpathlabs.com/swasthfit",
        highlight: true
      },
      {
        name: "Swasthfit Super 2",
        tests: "82+",
        includes: "Full organ function (liver, kidney, thyroid), CBC, lipids, vitamins, minerals, diabetes, cardiac markers",
        price: "₹2,500–₹3,500",
        bestFor: "Comprehensive annual health check",
        url: "https://www.lalpathlabs.com/swasthfit",
        highlight: false
      },
    ]
  },
  {
    lab: "Redcliffe Labs",
    logo: "🧪",
    tagline: "Home collection specialists — pan-India, doorstep service",
    packages: [
      {
        name: "Vitamin Profile (D + B12)",
        tests: 2,
        includes: "25-OH Vitamin D, Vitamin B12",
        price: "₹899",
        bestFor: "Quick affordable starting point — free home collection",
        url: "https://redcliffelabs.com/vitamin-d-vitamin-b12-test",
        highlight: false
      },
      {
        name: "Full Body Checkup with Vitamin D",
        tests: "70+",
        includes: "CBC, Liver, Kidney, Thyroid, Lipid, Diabetes, Vitamin D, Urine",
        price: "₹1,499",
        bestFor: "Best-value full body check with Vitamin D included",
        url: "https://redcliffelabs.com/full-body-checkup",
        highlight: true
      },
    ]
  },
  {
    lab: "1mg Labs",
    logo: "📱",
    tagline: "Aggregator platform — books from NABL-certified labs near you",
    packages: [
      {
        name: "Vitamin and Mineral Screening",
        tests: "10+",
        includes: "Vitamin D, B12, Iron, Calcium, Magnesium, CBC, Blood Sugar, Lipids",
        price: "₹1,500–₹2,500",
        bestFor: "Convenient booking — compares prices across nearby labs",
        url: "https://www.1mg.com/labs/test/vitamin-and-mineral-screening-package-35014",
        highlight: true
      },
    ]
  }
];

export const testingProtocol = [
  {
    icon: "🎯",
    title: "The Essential Starter Panel",
    desc: "If you've never tested before — these 6 tests cover 80% of common Indian deficiencies.",
    tests: ["Vitamin D (25-OH)", "Vitamin B12", "Iron Panel (Ferritin + Serum Iron + TIBC)", "CBC / Hemogram", "Serum Magnesium", "Thyroid (TSH + Free T3 + Free T4)"],
    cost: "Approx ₹2,500–₹4,000 (or use Thyrocare Aarogyam Advanced at ₹1,589 which covers most of these)"
  },
  {
    icon: "🌱",
    title: "Vegan / Vegetarian Panel",
    desc: "Higher-risk profile — add these on top of the starter panel.",
    tests: ["Vitamin B12 (critical)", "Folate (Serum)", "Homocysteine (functional B12/B9 marker)", "Serum Zinc", "Serum Calcium + PTH", "Urinary Iodine"],
    cost: "Approx ₹3,500–₹6,000 additional"
  },
  {
    icon: "🦋",
    title: "Thyroid / Fatigue Panel",
    desc: "For fatigue, hair loss, weight gain, cold intolerance.",
    tests: ["TSH + Free T3 + Free T4 + Anti-TPO (full thyroid)", "Vitamin D", "Serum Ferritin", "Serum Selenium", "Urinary Iodine", "Serum Magnesium"],
    cost: "Approx ₹3,000–₹5,000"
  },
  {
    icon: "🧬",
    title: "Methylation / Mood Panel",
    desc: "For depression, anxiety, poor concentration, brain fog.",
    tests: ["Homocysteine", "Vitamin B12", "Folate (Serum + RBC)", "Vitamin B6 (Plasma PLP)", "Serum Zinc", "Serum Magnesium"],
    cost: "Approx ₹4,000–₹7,000"
  },
  {
    icon: "🦴",
    title: "Bone Health Panel",
    desc: "For osteoporosis risk, calcium metabolism issues, fracture history.",
    tests: ["Vitamin D (25-OH)", "PTH (Parathyroid Hormone)", "Serum Calcium (ionized)", "Serum Magnesium", "Vitamin K2 (PIVKA-II)", "Phosphorus"],
    cost: "Approx ₹3,500–₹5,500"
  },
  {
    icon: "🩸",
    title: "Inflammation & Iron Safety Panel",
    desc: "Before supplementing iron — or whenever CRP is suspected high.",
    tests: ["hsCRP (high sensitivity)", "ESR", "Serum Ferritin", "Serum Iron + TIBC", "Transferrin Saturation", "CBC / Hemogram"],
    cost: "Approx ₹1,500–₹2,500 — most annual health packages include these"
  },
  {
    icon: "🍬",
    title: "Insulin Resistance / Metabolic Panel",
    desc: "For weight gain, fatigue, sugar cravings, PCOS, or family history of diabetes.",
    tests: ["Fasting Glucose + HbA1c", "Fasting Insulin (calculate HOMA-IR)", "Full Lipid Panel (Triglycerides key)", "hsCRP", "Serum Magnesium", "Vitamin D (25-OH)"],
    cost: "Approx ₹2,500–₹4,000 — Thyrocare Aarogyam Advanced covers most"
  },
];

export const citationsData = [
  {
    category: "Vitamin D3, K2 & Calcium",
    items: [
      { claim: "Vitamin D3 increases calcium absorption from the gut by up to 20×", ref: "Heaney RP, et al. (2003). Calcium absorption varies within the reference range for serum 25-hydroxyvitamin D. JCEM.", url: "https://pubmed.ncbi.nlm.nih.gov/12574226/" },
      { claim: "K2 activates Matrix GLA Protein (MGP) to prevent arterial calcification", ref: "Schurgers LJ, et al. (2007). Vitamin K-containing dietary supplements: comparison of synthetic vitamin K1 and natto-derived menaquinone-7. Blood.", url: "https://pubmed.ncbi.nlm.nih.gov/17138823/" },
      { claim: "Magnesium is required to convert Vitamin D3 into active calcitriol", ref: "Uwitonze AM, Razzaque MS. (2018). Role of Magnesium in Vitamin D Activation and Function. JAOA.", url: "https://pubmed.ncbi.nlm.nih.gov/29480918/" },
    ]
  },
  {
    category: "B12, Folate & Methylation",
    items: [
      { claim: "B12 deficiency traps folate in unusable form (folate trap)", ref: "Shane B, Stokstad EL. (1985). Vitamin B12-folate interrelationships. Annu Rev Nutr.", url: "https://pubmed.ncbi.nlm.nih.gov/3896333/" },
      { claim: "Elevated homocysteine from B12/B9/B6 deficiency predicts cardiovascular disease", ref: "Refsum H, et al. (2004). The Hordaland Homocysteine Study: a community-based study. Am J Clin Nutr.", url: "https://pubmed.ncbi.nlm.nih.gov/15113709/" },
      { claim: "High-dose folic acid can mask B12 deficiency neurological damage", ref: "Reynolds E. (2006). Vitamin B12, folic acid, and the nervous system. Lancet Neurol.", url: "https://pubmed.ncbi.nlm.nih.gov/17052662/" },
      { claim: "MTHFR C677T variant impairs folate metabolism — methylfolate preferred", ref: "Frosst P, et al. (1995). A candidate genetic risk factor for vascular disease: a common mutation in methylenetetrahydrofolate reductase. Nat Genet.", url: "https://pubmed.ncbi.nlm.nih.gov/7719998/" },
    ]
  },
  {
    category: "Iron, Copper & Inflammation",
    items: [
      { claim: "Vitamin C increases non-heme iron absorption by 2–4×", ref: "Hallberg L, Brune M, Rossander L. (1989). Iron absorption in man: ascorbic acid and dose-dependent inhibition by phytate. Am J Clin Nutr.", url: "https://pubmed.ncbi.nlm.nih.gov/2694476/" },
      { claim: "Copper (ceruloplasmin) is essential for iron to exit storage cells", ref: "Harris ZL, et al. (1999). Aceruloplasminemia: molecular characterization of this disorder. Proc Natl Acad Sci.", url: "https://pubmed.ncbi.nlm.nih.gov/10077649/" },
      { claim: "CRP elevates Hepcidin, causing functional iron sequestration during inflammation", ref: "Nemeth E, et al. (2004). Hepcidin regulates cellular iron efflux by binding to ferroportin and inducing its internalization. Science.", url: "https://pubmed.ncbi.nlm.nih.gov/15514116/" },
      { claim: "High-dose zinc supplementation depletes copper causing neuropathy", ref: "Prodan CI, et al. (2006). Copper deficiency after gastric surgery. J Neurol Neurosurg Psychiatry.", url: "https://pubmed.ncbi.nlm.nih.gov/16107359/" },
    ]
  },
  {
    category: "Thyroid, Selenium & Iodine",
    items: [
      { claim: "Selenium (deiodinase) is required to convert T4 to active T3", ref: "Bianco AC, et al. (2019). American Thyroid Association guide to investigating thyroid hormone economy and action. Thyroid.", url: "https://pubmed.ncbi.nlm.nih.gov/30900491/" },
      { claim: "High-dose iodine without selenium increases TPO antibodies in Hashimoto's", ref: "Toulis KA, et al. (2010). Selenium supplementation in the treatment of Hashimoto's thyroiditis: a systematic review. Thyroid.", url: "https://pubmed.ncbi.nlm.nih.gov/20883174/" },
      { claim: "Low Vitamin D is associated with elevated Anti-TPO antibodies", ref: "Mazokopakis EE, et al. (2015). The relationship between serum 25(OH)D3 levels and thyroid autoantibodies. Exp Clin Endocrinol Diabetes.", url: "https://pubmed.ncbi.nlm.nih.gov/25014004/" },
    ]
  },
  {
    category: "Magnesium",
    items: [
      { claim: "Magnesium deficiency directly impairs insulin receptor tyrosine kinase activity", ref: "Barbagallo M, Dominguez LJ. (2007). Magnesium and type 2 diabetes. World J Diabetes.", url: "https://pubmed.ncbi.nlm.nih.gov/26101638/" },
      { claim: "Potassium repletion resistant to correction often caused by Mg deficiency", ref: "Whang R, et al. (1992). Refractory potassium repletion: a consequence of magnesium deficiency. Arch Intern Med.", url: "https://pubmed.ncbi.nlm.nih.gov/1520042/" },
    ]
  },
  {
    category: "Omega-3 & Antioxidants",
    items: [
      { claim: "EPA + DHA reduces serum triglycerides by 20–50% at 2–4g/day", ref: "Skulas-Ray AC, et al. (2019). Omega-3 Fatty Acids for the Management of Hypertriglyceridemia: A Science Advisory From the AHA. Circulation.", url: "https://pubmed.ncbi.nlm.nih.gov/31422671/" },
      { claim: "Vitamin C regenerates oxidized Vitamin E back to active form", ref: "Packer JE, Slater TF, Willson RL. (1979). Direct observation of a free radical interaction between vitamin E and vitamin C. Nature.", url: "https://pubmed.ncbi.nlm.nih.gov/502039/" },
      { claim: "Statins block CoQ10 synthesis via mevalonate pathway", ref: "Littarru GP, Tiano L. (2007). Bioenergetic and antioxidant properties of coenzyme Q10. Mol Biotechnol.", url: "https://pubmed.ncbi.nlm.nih.gov/17914161/" },
    ]
  },
  {
    category: "Blood Sugar & Berberine",
    items: [
      { claim: "Berberine reduces HbA1c comparably to Metformin 1500mg/day", ref: "Yin J, Xing H, Ye J. (2008). Efficacy of berberine in patients with type 2 diabetes mellitus. Metabolism.", url: "https://pubmed.ncbi.nlm.nih.gov/18442638/" },
      { claim: "Chromium supplementation improves insulin sensitivity in type 2 diabetes", ref: "Balk EM, et al. (2007). Effect of chromium supplementation on glucose metabolism and lipids: a systematic review. Diabetes Care.", url: "https://pubmed.ncbi.nlm.nih.gov/17327355/" },
    ]
  },
];
