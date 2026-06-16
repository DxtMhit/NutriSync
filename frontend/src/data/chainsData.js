export const chains = [
  {
    title: "The Bone Calcification Chain",
    severity: "critical",
    desc: "D3 supplementation without K2 and Magnesium",
    nodes: [
      { label: "D3 Taken", sub: "No K2, No Mg", color: "var(--gold)", borderColor: "rgba(212,168,67,0.5)" },
      { label: "Calcium Absorbed ↑", sub: "Gut → Blood", color: "var(--blue)", borderColor: "rgba(74,144,217,0.5)" },
      { label: "No K2 Active", sub: "MGP stays inactive", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Calcium in Arteries", sub: "Not in bone", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Calcification", sub: "Arterial plaques", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "K2 (MK-7)", consequence: "Calcium not directed to bones — deposits in arteries and kidneys instead" },
      { nutrient: "Magnesium", consequence: "D3 cannot be converted to active calcitriol — calcium absorption fails to properly rise" },
      { nutrient: "Both K2 + Mg", consequence: "D3 supplementation may be useless AND raise soft tissue calcification risk" },
    ]
  },
  {
    title: "The Methylation Collapse Chain",
    severity: "critical",
    desc: "B12 deficiency (common in vegans, elderly, PPI users)",
    nodes: [
      { label: "B12 Deficient", sub: "Vegan / PPI user", color: "var(--blue)", borderColor: "rgba(74,144,217,0.5)" },
      { label: "Folate Trap", sub: "B9 unusable", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Methylation Fails", sub: "One-carbon cycle stalls", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Homocysteine ↑", sub: "Toxic buildup", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Nerve Damage", sub: "Dementia risk ↑", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "B12", consequence: "Folate cannot be activated — functional folate deficiency despite adequate intake" },
      { nutrient: "B6", consequence: "Homocysteine cannot be cleared via transsulfuration pathway" },
      { nutrient: "High-dose Folic Acid", consequence: "Masks B12 deficiency anemia — neurological damage progresses silently" },
    ]
  },
  {
    title: "The Iron Anemia Chain",
    severity: "high",
    desc: "Iron deficiency resistant to supplementation — the copper missing link",
    nodes: [
      { label: "Iron Taken", sub: "Supplement or food", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "No Vitamin C", sub: "Poor gut absorption", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "No Copper", sub: "Ceruloplasmin low", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Iron Trapped", sub: "Can't exit storage cells", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Anemia Persists", sub: "Despite high ferritin", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "Vitamin C", consequence: "Non-heme iron absorption drops dramatically (only 2–5% without C vs 20% with)" },
      { nutrient: "Copper", consequence: "Iron cannot be exported from enterocytes or liver — 'functional iron deficiency' with high stores" },
      { nutrient: "Vitamin A", consequence: "Iron mobilization from liver stores is impaired — anemia persists despite iron supplementation" },
    ]
  },
  {
    title: "The Thyroid Dysfunction Chain",
    severity: "high",
    desc: "Selenium deficiency with iodine supplementation",
    nodes: [
      { label: "Iodine Taken", sub: "High dose", color: "var(--teal)", borderColor: "rgba(45,212,191,0.5)" },
      { label: "Selenium Low", sub: "Deiodinase ↓", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "T4 Accumulates", sub: "T4→T3 conversion fails", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "TPO Antibodies ↑", sub: "Autoimmune attack", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Hashimoto's Worsened", sub: "Thyroid destruction ↑", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "Selenium", consequence: "T4 cannot be converted to active T3 — hypothyroid symptoms persist despite normal T4" },
      { nutrient: "Iron", consequence: "Thyroid peroxidase (TPO) cannot function — hormone synthesis impaired" },
      { nutrient: "Zinc", consequence: "T3 cannot bind its nuclear receptor — hormone signaling is blocked at the cell level" },
    ]
  },
  {
    title: "The Potassium Repletion Failure",
    severity: "moderate",
    desc: "Potassium supplements that don't work — the magnesium block",
    nodes: [
      { label: "Low Potassium", sub: "Lab confirmed", color: "var(--green)", borderColor: "rgba(93,202,126,0.5)" },
      { label: "Potassium Given", sub: "Supplements/diet", color: "var(--green)", borderColor: "rgba(93,202,126,0.5)" },
      { label: "Mg Deficient", sub: "Na/K pump fails", color: "var(--purple)", borderColor: "rgba(139,92,246,0.5)" },
      { label: "K⁺ Can't Enter Cells", sub: "Stays in blood", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Still Hypokalemic", sub: "Despite supplementing", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "Magnesium", consequence: "The Na⁺/K⁺-ATPase pump cannot transport potassium into cells without magnesium as cofactor" },
      { nutrient: "Rule of thumb", consequence: "Always correct magnesium deficiency before or alongside potassium — especially in cardiac patients" },
    ]
  },
  {
    title: "The Zinc-Copper Depletion Loop",
    severity: "high",
    desc: "Long-term high-dose zinc supplementation without copper",
    nodes: [
      { label: "Zinc Taken", sub: "High dose, long-term", color: "var(--teal)", borderColor: "rgba(45,212,191,0.5)" },
      { label: "Copper Blocked", sub: "Metallothionein binds Cu", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Ceruloplasmin ↓", sub: "Iron transport fails", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Dopamine → NE ↓", sub: "Norepinephrine low", color: "var(--purple)", borderColor: "rgba(139,92,246,0.5)" },
      { label: "Neuropathy + Anemia", sub: "Mimics B12 deficiency", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "Copper", consequence: "Copper deficiency from zinc causes anemia, neuropathy, gait disturbances — often misdiagnosed" },
      { nutrient: "Iron", consequence: "Secondarily depleted as ceruloplasmin (copper protein) needed to transport iron falls" },
      { nutrient: "Safe ratio", consequence: "Zinc:Copper ratio of 8:1 to 10:1 should be maintained in all supplementation" },
    ]
  },
  {
    title: "The CRP / Hepcidin Iron Trap",
    severity: "critical",
    desc: "Supplementing iron during active inflammation — the hidden danger",
    nodes: [
      { label: "Inflammation Active", sub: "Infection / chronic illness", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "CRP Elevated", sub: "Liver alarm signal", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Hepcidin Released", sub: "Iron-lock hormone", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Iron Sequestered", sub: "Trapped in stores", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Iron Supp. Fails", sub: "Feeds bacteria instead", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "CRP test (missed)", consequence: "Low serum iron during active CRP elevation is a defensive response — not true iron deficiency. Iron supplementation in this state is ineffective and may fuel bacterial growth (pathogens use iron)." },
      { nutrient: "Protocol", consequence: "Always test CRP alongside Ferritin and Serum Iron. Treat the inflammation first, then retest iron markers before supplementing." },
      { nutrient: "Ferritin can be falsely elevated", consequence: "Ferritin is also an acute-phase protein — it can appear high during inflammation even when true iron stores are low. CRP must be checked to correctly interpret ferritin." },
    ]
  },
  {
    title: "The Omega-3 Oxidation Chain",
    severity: "moderate",
    desc: "High-dose fish oil without Vitamin E — oxidative backfire",
    nodes: [
      { label: "High-Dose Fish Oil", sub: "3g+ EPA/DHA/day", color: "var(--blue)", borderColor: "rgba(74,144,217,0.5)" },
      { label: "Vitamin E Low", sub: "Membrane antioxidant absent", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Lipid Peroxidation", sub: "Omega-3 oxidizes in cells", color: "var(--amber)", borderColor: "rgba(224,123,42,0.5)" },
      { label: "Oxidative Stress ↑", sub: "4-HNE and MDA form", color: "var(--rose)", borderColor: "rgba(212,93,93,0.5)" },
      { label: "Inflammation ↑", sub: "Opposite of intended", color: "var(--rose)", borderColor: "rgba(212,93,93,0.7)" },
    ],
    missing: [
      { nutrient: "Vitamin E", consequence: "Fish oil is a highly unsaturated fat — the most oxidation-prone fat in the body. Vitamin E in cell membranes is the primary defense against this peroxidation." },
      { nutrient: "Storage", consequence: "Rancid fish oil smells fishy and causes oxidative harm. Refrigerate all omega-3 capsules. Buy products with added mixed tocopherols." },
      { nutrient: "CoQ10 (supportive)", consequence: "CoQ10 provides additional antioxidant protection in mitochondrial membranes alongside Vitamin E when supplementing omega-3." },
    ]
  },
];
