export const clustersData = [
  {
    icon: "☀️",
    iconBg: "bg-gold",
    iconBorder: "rgba(212,168,67,0.3)",
    name: "The Bone & Calcium Quartet",
    tagline: "D3 · K2 · Calcium · Magnesium",
    members: [
      { label: "Vitamin D3", color: "gold" },
      { label: "Vitamin K2 (MK-7)", color: "green" },
      { label: "Calcium", color: "blue" },
      { label: "Magnesium", color: "purple" },
    ],
    deps: [
      { text: `<strong>D3</strong> increases absorption of calcium from the gut by up to 20×. Without D3, only 10–15% of dietary calcium is absorbed.` },
      { text: `<strong>K2 (MK-7)</strong> activates osteocalcin (deposits calcium into bone) and Matrix GLA Protein (removes calcium from arteries). Without K2, calcium circulates freely and calcifies soft tissue.` },
      { text: `<strong>Magnesium</strong> is required by the liver and kidneys to convert D3 into its active form (calcitriol). D3 supplements without magnesium may be ineffective. Magnesium also balances calcium inside cells.` },
      { text: `<strong>Calcium</strong> and magnesium compete for absorption — excess calcium can deplete magnesium. The optimal Ca:Mg dietary ratio is approximately 2:1.` },
    ],
    deficiency: {
      label: "⚠ If K2 is missing",
      text: "D3 + Calcium without K2 may increase arterial calcification, kidney stones, and calcification of soft tissue. The calcium is absorbed but goes to the wrong places."
    }
  },
  {
    icon: "🧬",
    iconBg: "bg-blue",
    iconBorder: "rgba(74,144,217,0.3)",
    name: "The Methylation Triad",
    tagline: "B12 · B9 (Folate) · B6",
    members: [
      { label: "Vitamin B12", color: "blue" },
      { label: "Vitamin B9 (Folate)", color: "blue" },
      { label: "Vitamin B6", color: "blue" },
      { label: "Riboflavin (B2)", color: "rose" },
    ],
    deps: [
      { text: `<strong>B12</strong> is required to convert folate (B9) into its active, usable form 5-MTHF. Without B12, folate is "trapped" — a phenomenon called the folate trap. You can be folate-deficient even with plenty of dietary folate.` },
      { text: `<strong>B9 + B12 + B6</strong> together break down homocysteine — a toxic amino acid linked to cardiovascular disease, cognitive decline, and neural tube defects. Any one missing = elevated homocysteine.` },
      { text: `<strong>B2 (Riboflavin)</strong> regenerates MTHFR enzyme function — especially critical for the ~40% of people with MTHFR gene variants who struggle to activate folate and B12.` },
      { text: `<strong>B12</strong> requires Intrinsic Factor (a stomach protein) for absorption. Those with low stomach acid, PPIs, or gut issues often need sublingual or injected B12.` },
      { text: `<strong>MTHFR gene variants (C677T / A1298C)</strong> impair conversion of folic acid → active 5-MTHF and cyanocobalamin → methylcobalamin. For these individuals, synthetic folic acid supplementation can worsen outcomes by blocking the folate receptor. Always use Methylfolate (5-MTHF) and Methylcobalamin/Adenosylcobalamin — not folic acid or cyanocobalamin.` },
      { text: `<strong>Serum B12 is an unreliable marker alone.</strong> Up to 20% of people with "normal" serum B12 have functional B12 deficiency. Active B12 (Holotranscobalamin) and MMA (Methylmalonic Acid) are far more sensitive markers — MMA rises specifically when B12 is functionally depleted at the cellular level, before serum B12 drops.` },
    ],
    deficiency: {
      label: "⚠ If B12 is missing",
      text: "High-dose folic acid (B9) supplementation can mask B12 deficiency anemia while allowing neurological damage to progress silently — one of the most dangerous nutrient interactions."
    }
  },
  {
    icon: "🩸",
    iconBg: "bg-rose",
    iconBorder: "rgba(212,93,93,0.3)",
    name: "The Iron Quartet",
    tagline: "Iron · Vitamin C · Copper · Zinc",
    members: [
      { label: "Iron", color: "rose" },
      { label: "Vitamin C", color: "amber" },
      { label: "Copper", color: "amber" },
      { label: "Zinc", color: "teal" },
      { label: "Vitamin A", color: "gold" },
    ],
    deps: [
      { text: `<strong>Vitamin C</strong> converts non-heme iron (plant-based) from Fe³⁺ to Fe²⁺, increasing absorption by 2–4×. Taking iron without vitamin C significantly reduces absorption.` },
      { text: `<strong>Copper</strong> (via ceruloplasmin/ferroxidase) is essential for iron to exit storage cells and enter the bloodstream. Copper deficiency causes functional iron deficiency even with adequate iron stores.` },
      { text: `<strong>Zinc and Iron compete</strong> for the same intestinal transporter (DMT1). High-dose iron supplements taken simultaneously with zinc reduce zinc absorption by up to 50%.` },
      { text: `<strong>Vitamin A</strong> helps mobilize iron from liver stores and is required to produce transferrin (the iron-transport protein) and red blood cell precursors.` },
      { text: `<strong>⚠ CRP/Inflammation safety check:</strong> Elevated CRP triggers the liver to release Hepcidin — a hormone that blocks iron absorption from the gut and traps iron inside storage cells. This creates functional iron deficiency: serum iron appears low, but it is a defensive response to inflammation, not true depletion. Supplementing iron during active inflammation is ineffective and potentially harmful. Always test CRP alongside iron markers before starting iron supplementation.` },
    ],
    deficiency: {
      label: "⚠ High zinc without copper",
      text: "Long-term zinc supplementation without copper causes copper deficiency — leading to anemia that looks like iron deficiency, neuropathy, and poor wound healing. Always pair zinc with copper at ~8:1 ratio."
    }
  },
  {
    icon: "🦋",
    iconBg: "bg-teal",
    iconBorder: "rgba(45,212,191,0.3)",
    name: "The Thyroid System",
    tagline: "Iodine · Selenium · Zinc · Iron · Vitamin D",
    members: [
      { label: "Iodine", color: "teal" },
      { label: "Selenium", color: "teal" },
      { label: "Zinc", color: "teal" },
      { label: "Iron", color: "rose" },
      { label: "Vitamin D", color: "gold" },
    ],
    deps: [
      { text: `<strong>Iodine</strong> is incorporated directly into thyroid hormones T3 and T4. Without iodine, the thyroid cannot produce hormones — leading to goiter and hypothyroidism.` },
      { text: `<strong>Selenium</strong> (via deiodinase enzymes) converts T4 (inactive) to T3 (active). Without selenium, you may have normal T4 levels but still experience hypothyroid symptoms due to poor T4→T3 conversion. Also critical for thyroid peroxidase function.` },
      { text: `<strong>Iron</strong> is needed for thyroid peroxidase, the enzyme that synthesizes thyroid hormones. Iron deficiency impairs thyroid function independently of iodine.` },
      { text: `<strong>Zinc</strong> is required for T3 to bind its nuclear receptor. Even with adequate T3, zinc deficiency prevents hormone signaling from reaching target cells.` },
      { text: `<strong>Iron → Thyroid Peroxidase (TPO) cross-link:</strong> TPO is an iron-dependent enzyme — it requires heme-iron at its active site to synthesize thyroid hormones. Iron deficiency impairs thyroid hormone production independently of iodine or selenium status. If thyroid function is low and iron studies show deficiency, treat iron first and re-test the thyroid panel.` },
      { text: `<strong>Vitamin D3 + Hashimoto's (Anti-TPO antibodies):</strong> Vitamin D receptors are present on immune cells that regulate autoimmunity. Low Vitamin D is independently associated with elevated Anti-TPO antibodies and Hashimoto's disease. Clinical data show that correcting Vitamin D deficiency (to >40 ng/mL) significantly reduces TPO antibody titers in Hashimoto's patients. If Anti-TPO antibodies are positive, Vitamin D status should be treated as a priority cross-check.` },
    ],
    deficiency: {
      label: "⚠ Iodine without Selenium",
      text: "High-dose iodine supplementation without adequate selenium can worsen autoimmune thyroid conditions (Hashimoto's) by increasing thyroid peroxidase antibodies. Selenium must precede or accompany iodine loading."
    }
  },
  {
    icon: "⚡",
    iconBg: "bg-purple",
    iconBorder: "rgba(139,92,246,0.3)",
    name: "The Magnesium Web",
    tagline: "Magnesium — cofactor for 300+ enzymes",
    members: [
      { label: "Magnesium", color: "purple" },
      { label: "Vitamin D", color: "gold" },
      { label: "B6 (P5P)", color: "blue" },
      { label: "Potassium", color: "blue" },
      { label: "ATP", color: "green" },
    ],
    deps: [
      { text: `<strong>Magnesium activates ATP</strong> — the body's energy currency. ATP must be bound to magnesium to be biologically active. Magnesium deficiency = cellular energy deficiency.` },
      { text: `<strong>Magnesium activates Vitamin D</strong> via two hepatic and renal hydroxylation steps. High-dose D3 without sufficient magnesium can actually deplete magnesium further, causing muscle cramps, anxiety, and poor sleep.` },
      { text: `<strong>Magnesium + B6 (P5P)</strong> work synergistically — both are required for the synthesis of serotonin, dopamine, and GABA. B6 also enhances magnesium transport into cells.` },
      { text: `<strong>Potassium regulation</strong> requires magnesium. The Na⁺/K⁺-ATPase pump needs magnesium to function. Potassium deficiency that doesn't respond to supplementation is often caused by underlying magnesium deficiency.` },
    ],
    deficiency: {
      label: "⚠ The D3 Magnesium Drain",
      text: "Starting high-dose D3 (5,000–10,000 IU/day) without adequate magnesium is a common cause of \"D3 side effects\" — headaches, anxiety, palpitations — which are actually magnesium depletion symptoms."
    }
  },
  {
    icon: "🛡️",
    iconBg: "bg-amber",
    iconBorder: "rgba(224,123,42,0.3)",
    name: "The Antioxidant Network",
    tagline: "C · E · Selenium · Glutathione · CoQ10",
    members: [
      { label: "Vitamin C", color: "amber" },
      { label: "Vitamin E", color: "amber" },
      { label: "Selenium", color: "teal" },
      { label: "Glutathione", color: "green" },
      { label: "CoQ10", color: "gold" },
    ],
    deps: [
      { text: `<strong>Vitamin C regenerates Vitamin E</strong> — after Vitamin E donates an electron to neutralize a free radical, it becomes a radical itself. Vitamin C donates an electron to restore Vitamin E to its active form.` },
      { text: `<strong>Selenium</strong> is the core of glutathione peroxidase — an enzyme that neutralizes hydrogen peroxide and lipid peroxides. Without selenium, the glutathione system cannot function properly.` },
      { text: `<strong>CoQ10</strong> regenerates vitamin E within cell membranes and protects mitochondria. Statin drugs deplete CoQ10 — supplementing statins without CoQ10 worsens mitochondrial oxidative stress.` },
      { text: `<strong>Glutathione recycling</strong> requires B2 (riboflavin) via glutathione reductase, and B3 (niacin, via NADPH). Both B vitamins are essential to keep glutathione in its active reduced form.` },
    ],
    deficiency: {
      label: "⚠ Isolated antioxidant supplementation",
      text: "Taking very high doses of a single antioxidant (e.g. Vitamin E alone) can paradoxically increase oxidative stress. Antioxidants are most effective as an integrated network — not in isolation."
    }
  },
  {
    icon: "🌿",
    iconBg: "bg-green",
    iconBorder: "rgba(93,202,126,0.3)",
    name: "Fat-Soluble Vitamin Balance",
    tagline: "A · D · E · K — the ADEK system",
    members: [
      { label: "Vitamin A", color: "green" },
      { label: "Vitamin D", color: "gold" },
      { label: "Vitamin E", color: "amber" },
      { label: "Vitamin K", color: "rose" },
    ],
    deps: [
      { text: `<strong>Vitamins A and D are antagonists</strong> in high doses — they compete for the same RXR nuclear receptor. Extremely high A can block D signaling and vice versa. Balance is critical: the optimal A:D ratio is approximately 5:1.` },
      { text: `<strong>Vitamin E in high doses</strong> can inhibit Vitamin K-dependent clotting factors. Those on blood thinners (warfarin) must be especially cautious with Vitamin E supplementation.` },
      { text: `<strong>All four are fat-soluble</strong> — they require dietary fat for absorption. Taking these vitamins with a fat-free meal renders them largely unabsorbed. A minimum of ~10g of fat per meal enhances absorption.` },
      { text: `<strong>Vitamin A (retinol)</strong> is required to convert beta-carotene (from plants) into active retinol — but this conversion is genetically variable. Up to 45% of people are poor converters and cannot rely on plant sources alone.` },
    ],
    deficiency: {
      label: "⚠ Storage risk",
      text: "Unlike water-soluble vitamins, fat-soluble vitamins (especially A and D) accumulate in fat tissue and the liver. Chronic megadosing can lead to hypervitaminosis A or D toxicity. Regular testing is advised."
    }
  },
  {
    icon: "🧠",
    iconBg: "bg-teal",
    iconBorder: "rgba(45,212,191,0.3)",
    name: "The Neurotransmitter Triad",
    tagline: "Zinc · B6 · Copper · Tryptophan",
    members: [
      { label: "Zinc", color: "teal" },
      { label: "B6 (P5P)", color: "blue" },
      { label: "Copper", color: "amber" },
      { label: "B3 (Niacin)", color: "purple" },
      { label: "Magnesium", color: "green" },
    ],
    deps: [
      { text: `<strong>B6 (as P5P)</strong> is the rate-limiting cofactor for serotonin synthesis (from 5-HTP), dopamine synthesis (from L-DOPA), GABA synthesis, and melatonin production. Without activated B6, neurotransmitter production stalls.` },
      { text: `<strong>Zinc</strong> regulates glutamate (excitatory) neurotransmission and is stored in synaptic vesicles. Zinc deficiency is associated with depression, poor memory, and heightened anxiety. Also needed to convert B6 to its active P5P form.` },
      { text: `<strong>Copper</strong> is needed for dopamine-β-hydroxylase — the enzyme that converts dopamine to norepinephrine. Copper deficiency lowers norepinephrine, affecting focus, mood, and stress response. Zinc excess suppresses copper.` },
      { text: `<strong>B3 (Niacin)</strong> via NAD⁺ is essential for serotonin synthesis — niacin and serotonin share the same tryptophan pathway. High niacin demand "steals" tryptophan away from serotonin production.` },
      { text: `<strong>Zinc supplement form matters significantly.</strong> Zinc Bisglycinate and Zinc Picolinate are the best-absorbed forms (25–35% absorption). Zinc Citrate is moderate. Zinc Oxide — found in most cheap multivitamins — has only ~10% absorption and should be avoided. <strong>Always take zinc with food</strong> — on an empty stomach it reliably causes nausea and vomiting due to irritation of the gastric mucosa.` },
    ],
    deficiency: {
      label: "⚠ Pyroluria connection",
      text: "A metabolic disorder called pyroluria causes excess urinary loss of both zinc and B6 simultaneously — resulting in severe mental health symptoms. Treating requires both nutrients together in high doses under medical supervision."
    }
  },
  {
    icon: "🐟",
    iconBg: "bg-blue",
    iconBorder: "rgba(74,144,217,0.3)",
    name: "Omega-3 & Inflammation",
    tagline: "EPA · DHA · Vitamin E · CRP · Triglycerides",
    members: [
      { label: "EPA (Omega-3)", color: "blue" },
      { label: "DHA (Omega-3)", color: "blue" },
      { label: "Vitamin E", color: "amber" },
      { label: "Vitamin D3", color: "gold" },
      { label: "Magnesium", color: "purple" },
    ],
    deps: [
      { text: `<strong>Vitamin E must accompany Omega-3 supplementation.</strong> Fish oil (EPA/DHA) is a polyunsaturated fat — highly prone to oxidation inside the body. Vitamin E acts as an in-membrane antioxidant that prevents lipid peroxidation of the omega-3 molecules. High-dose fish oil without adequate Vitamin E increases oxidative stress rather than reducing it.` },
      { text: `<strong>EPA reduces triglycerides</strong> via inhibiting VLDL assembly in the liver and activating PPAR-alpha (fat-burning pathway). 2–4g/day of EPA+DHA reduces serum triglycerides by 20–50% — one of the most evidence-backed supplement effects.` },
      { text: `<strong>CRP elevation is a signal to evaluate D3, Magnesium, and Omega-3</strong> simultaneously. All three have meaningful anti-inflammatory evidence. High CRP also triggers Hepcidin — a hormone that sequesters iron and causes functional iron deficiency. Never interpret low serum iron in isolation — check CRP first.` },
      { text: `<strong>DHA</strong> is the primary structural fat in brain cell membranes and the retina. It is not efficiently converted from ALA (plant omega-3 in flaxseed) — conversion rate is below 5% in most adults. Vegans must use algae-derived DHA directly.` },
    ],
    deficiency: {
      label: "⚠ Fish oil without Vitamin E",
      text: "High-dose fish oil (3g+/day) without adequate Vitamin E can increase lipid peroxidation markers. Always ensure Vitamin E adequacy before high-dose omega-3 supplementation. Refrigerate fish oil capsules to slow oxidation."
    }
  },
  {
    icon: "👁️",
    iconBg: "bg-green",
    iconBorder: "rgba(93,202,126,0.3)",
    name: "Vitamin A + Zinc Transport",
    tagline: "Vitamin A · Zinc · RBP · Vitamin D3",
    members: [
      { label: "Vitamin A", color: "green" },
      { label: "Zinc", color: "teal" },
      { label: "Vitamin D3", color: "gold" },
      { label: "Iron", color: "rose" },
    ],
    deps: [
      { text: `<strong>Zinc produces Retinol-Binding Protein (RBP)</strong> — the transport protein that carries Vitamin A from the liver into the bloodstream to reach target tissues. Without adequate zinc, Vitamin A is synthesized and stored in the liver but cannot be mobilized or delivered. This means serum Vitamin A can appear falsely normal while tissues are functionally deficient.` },
      { text: `<strong>Vitamin A and Vitamin D3 are antagonists at receptor level.</strong> Both bind to Retinoid X Receptor (RXR). At high doses, excess Vitamin A competes with D3 and blocks its genomic signaling. Conversely, excess D3 can reduce Vitamin A activity. The clinically safe ratio is approximately 5:1 (A:D3) in IU terms.` },
      { text: `<strong>Zinc deficiency causes functional Vitamin A deficiency</strong> even in protein-sufficient, well-fed individuals. Correcting Vitamin A levels may require zinc repletion first — supplementing A alone without zinc may not raise tissue levels.` },
      { text: `<strong>Vitamin A is required for iron utilization</strong> — it regulates transferrin receptor expression and supports red blood cell maturation. Anemia that fails to respond to iron supplementation may reflect underlying Vitamin A deficiency.` },
    ],
    deficiency: {
      label: "⚠ High-dose Vitamin A blocks D3",
      text: "Taking Vitamin A supplements (retinol) above 10,000 IU/day while also supplementing D3 can negate D3's benefits. Preformed retinol (animal sources, cod liver oil) is the risk — beta-carotene from plants does not cause this antagonism."
    }
  },
  {
    icon: "🩺",
    iconBg: "bg-amber",
    iconBorder: "rgba(224,123,42,0.3)",
    name: "Blood Sugar & Insulin Sensitivity",
    tagline: "Magnesium · Chromium · Zinc · Berberine · B vitamins",
    members: [
      { label: "Magnesium", color: "purple" },
      { label: "Chromium", color: "green" },
      { label: "Zinc", color: "teal" },
      { label: "B1 (Thiamine)", color: "blue" },
      { label: "B3 (Niacin)", color: "blue" },
    ],
    deps: [
      { text: `<strong>Magnesium is rate-limiting for insulin signaling.</strong> Magnesium deficiency directly impairs the insulin receptor's tyrosine kinase activity — the first step in glucose uptake. Meta-analyses show that correcting magnesium deficiency significantly improves insulin sensitivity and fasting glucose. Insulin resistance and magnesium deficiency create a vicious cycle: insulin resistance increases urinary magnesium loss, worsening the deficiency.` },
      { text: `<strong>Chromium (as Chromodulin)</strong> amplifies insulin receptor signaling — it activates the same tyrosine kinase pathway that Magnesium supports. Chromium works with Niacin (B3) as a unit called GTF-Chromium (Glucose Tolerance Factor). Chromium picolinate is the best-studied supplemental form for blood sugar management.` },
      { text: `<strong>Zinc is stored in pancreatic beta cells</strong> and is required for insulin synthesis, crystallization, and secretion. Zinc also binds to insulin hexamers, stabilizing them for storage. Low zinc is associated with impaired insulin release and elevated post-meal glucose.` },
      { text: `<strong>Berberine</strong> activates AMPK (the same pathway as Metformin) and reduces hepatic glucose production. Clinical trials show it reduces fasting glucose and HbA1c comparably to Metformin in type 2 diabetes. It also improves lipid profiles. Key lab tests for this cluster: Fasting Glucose, HbA1c, Fasting Insulin, HOMA-IR.` },
    ],
    deficiency: {
      label: "⚠ Magnesium + insulin resistance feedback loop",
      text: "Insulin resistance → increases renal magnesium excretion → worsens magnesium deficiency → further impairs insulin signaling. Breaking this cycle with Magnesium Glycinate (200–400mg/day) can improve insulin sensitivity independently of diet or exercise changes."
    }
  },
  {
    icon: "💛",
    iconBg: "bg-rose",
    iconBorder: "rgba(212,93,93,0.3)",
    name: "Lipid Panel & Supplement Links",
    tagline: "Omega-3 · Niacin (B3) · CoQ10 · Plant Sterols · Berberine",
    members: [
      { label: "EPA / DHA", color: "blue" },
      { label: "Niacin (B3)", color: "blue" },
      { label: "CoQ10", color: "amber" },
      { label: "Plant Sterols", color: "green" },
      { label: "Berberine", color: "green" },
    ],
    deps: [
      { text: `<strong>High Triglycerides → EPA/DHA (Omega-3).</strong> 2–4g/day of EPA+DHA is the most effective natural intervention for elevated triglycerides, reducing them by 20–50%. Prescription Omega-3 (Vascepa/icosapentaenoic acid) is FDA-approved for hypertriglyceridemia. Always pair with Vitamin E.` },
      { text: `<strong>Low HDL → Niacin (B3) + Omega-3.</strong> Flush niacin (nicotinic acid) at 1–3g/day is the most potent natural HDL-raising intervention (+15–35%). This creates a direct metabolic bridge between the B-Complex cluster and cardiovascular lipid management — B3 is simultaneously a methylation cofactor and a lipid-modifying nutrient.` },
      { text: `<strong>High LDL → Plant Sterols + Berberine.</strong> Plant sterols (2g/day) reduce LDL by 10–15% by competing with cholesterol for intestinal absorption. Berberine reduces LDL by upregulating LDL receptors in the liver (similar mechanism to statins, without depleting CoQ10).` },
      { text: `<strong>Statin use → CoQ10 depletion is near-certain.</strong> Statins block HMG-CoA reductase in the mevalonate pathway — the same pathway that produces both cholesterol and CoQ10. CoQ10 depletion causes statin-induced myopathy, fatigue, and mitochondrial dysfunction. Supplement 100–200mg CoQ10 daily with any statin.` },
    ],
    deficiency: {
      label: "⚠ Niacin + Statin combination",
      text: "High-dose flush niacin combined with statins can increase risk of myopathy (muscle damage). This combination should only be used under medical supervision with regular CK (creatine kinase) monitoring."
    }
  },
];
