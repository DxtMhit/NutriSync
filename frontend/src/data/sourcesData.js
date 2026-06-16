export const sourcesData = [
  {
    category: "Fat-Soluble Vitamins", icon: "🌿",
    items: [
      { name: "Vitamin A (Retinol)", emoji: "🥩☀️", topSources: "Beef liver, cod liver oil, butter (grass-fed), egg yolks", plantSources: "Sweet potato, carrot, kale (beta-carotene — conversion varies)", notes: "Animal retinol is directly bioavailable. Plant beta-carotene requires conversion — impaired in ~45% of people." },
      { name: "Vitamin D3", emoji: "☀️🐟", topSources: "Sunlight (UVB), cod liver oil, salmon, mackerel, sardines", plantSources: "UV-exposed mushrooms (D2, less effective)", notes: "Skin synthesis is most efficient. Supplement D3 (cholecalciferol), not D2, for best blood level response." },
      { name: "Vitamin E", emoji: "🌻🌰", topSources: "Wheat germ oil, sunflower seeds, almonds, hazelnuts", plantSources: "Spinach, broccoli, avocado, olive oil", notes: "Natural d-alpha-tocopherol has double the activity of synthetic dl-alpha. Mixed tocopherols are ideal." },
      { name: "Vitamin K2 (MK-7)", emoji: "🫘🧀", topSources: "Natto (highest), gouda/brie cheese, goose liver, egg yolks", plantSources: "K1 from leafy greens — but K1 ≠ K2 (different functions)", notes: "MK-7 has a 72-hour half-life vs MK-4's 1-hour — once-daily dosing sufficient for MK-7." },
    ]
  },
  {
    category: "Water-Soluble B Vitamins", icon: "🧬",
    items: [
      { name: "B1 (Thiamine)", emoji: "🐷🌾", topSources: "Pork, sunflower seeds, trout, mussels, black beans", plantSources: "Whole grains, asparagus, acorn squash", notes: "Destroyed by heat and sulfites. Raw fish contains thiaminase (destroys B1). Alcohol dramatically depletes." },
      { name: "B2 (Riboflavin)", emoji: "🥩🥛", topSources: "Beef liver, kidney, milk, cheese, almonds", plantSources: "Spinach, almonds, edamame, quinoa", notes: "Light-sensitive — milk in clear containers loses riboflavin. Key for MTHFR enzyme and glutathione recycling." },
      { name: "B3 (Niacin)", emoji: "🐟🥜", topSources: "Tuna, chicken, turkey, beef liver, peanuts", plantSources: "Avocado, mushrooms, brown rice, peanut butter", notes: "Niacinamide form doesn't cause flushing. Tryptophan is a precursor (60 mg Trp = ~1 mg niacin)." },
      { name: "B6 (Pyridoxine)", emoji: "🐟🍌", topSources: "Tuna, salmon, chicken, beef liver, beef", plantSources: "Banana, potato, avocado, chickpeas, pistachios", notes: "P5P (active form) best for those with liver issues or MTHFR. High-dose pyridoxine (not P5P) causes neuropathy." },
      { name: "B9 (Folate)", emoji: "🥬🫘", topSources: "Beef liver, oysters (small amounts)", plantSources: "Spinach, romaine, lentils, asparagus, avocado, broccoli", notes: "Choose 5-MTHF (methylfolate) over folic acid. Folate is heat-sensitive — raw greens superior." },
      { name: "B12 (Cobalamin)", emoji: "🦀🐟", topSources: "Clams, beef liver, sardines, mackerel, beef, lamb", plantSources: "Nutritional yeast (fortified), tempeh (variable)", notes: "Almost exclusively in animal foods. Vegans must supplement. Methylcobalamin preferred. Needs Intrinsic Factor for absorption." },
    ]
  },
  {
    category: "Vitamin C", icon: "🍊",
    items: [
      { name: "Vitamin C", emoji: "🌶️🥝", topSources: "Red bell pepper (190 mg/100g), kiwi, guava, papaya, strawberries", plantSources: "All plant-based; broccoli, Brussels sprouts, tomatoes, oranges", notes: "Heat-sensitive — raw sources superior. Humans can't synthesize Vitamin C. Optimal dose 200–500 mg/day." },
    ]
  },
  {
    category: "Macro Minerals", icon: "⚡",
    items: [
      { name: "Calcium", emoji: "🥛🐟", topSources: "Dairy (milk, cheese, yogurt), canned sardines/salmon with bones", plantSources: "Kale, bok choy, almonds, white beans, fortified plant milks", notes: "Spinach calcium is poorly absorbed (oxalates). Kale calcium is highly bioavailable. Need D3 + K2 for proper use." },
      { name: "Magnesium", emoji: "🥬🍫", topSources: "Pumpkin seeds, dark chocolate (70%+), Brazil nuts, halibut", plantSources: "Spinach, Swiss chard, black beans, avocado, banana", notes: "Many forms: glycinate (sleep), malate (energy), threonate (brain). Oxide form has poor absorption (~4%). Soil depletion means even 'good' diets may be low." },
      { name: "Phosphorus", emoji: "🥩🥛", topSources: "Meat, poultry, fish, dairy, eggs", plantSources: "Legumes, whole grains, nuts", notes: "Excess phosphorus (from processed foods) can deplete calcium from bone. Maintain Ca:P ratio of ~1:1." },
      { name: "Potassium", emoji: "🍌🥔", topSources: "White potato with skin, acorn squash, lentils, white beans", plantSources: "Banana, avocado, spinach, sweet potato, tomato paste", notes: "Cannot be effectively supplemented in large doses (FDA limits single supplement to 99 mg). Must come primarily from food." },
      { name: "Sodium", emoji: "🧂🫙", topSources: "Salt, processed foods, cured meats, cheese", plantSources: "Seaweed, celery (naturally occurring)", notes: "Most diets have excess sodium. Na:K ratio matters — aim to increase potassium rather than restrict sodium alone." },
    ]
  },
  {
    category: "Trace Minerals", icon: "🔬",
    items: [
      { name: "Iron", emoji: "🥩🐚", topSources: "Clams, oysters, beef liver, beef, lamb (all heme iron — 15–35% absorption)", plantSources: "Lentils, spinach, pumpkin seeds, quinoa (non-heme — 2–20% absorption)", notes: "Take Vitamin C with non-heme iron to triple absorption. Avoid tea/coffee/calcium with iron meals. Test ferritin before supplementing." },
      { name: "Zinc", emoji: "🐚🥩", topSources: "Oysters (highest density), beef, lamb, pumpkin seeds", plantSources: "Chickpeas, lentils, hemp seeds, cashews, quinoa", notes: "Phytates in plant foods reduce zinc absorption significantly. Vegetarians need 50% more dietary zinc than omnivores." },
      { name: "Copper", emoji: "🐚🍫", topSources: "Oysters (highest), beef liver, crab, lobster", plantSources: "Sesame seeds/tahini, cashews, dark chocolate, spirulina, sunflower seeds", notes: "Often overlooked. Zinc supplements without copper cause copper deficiency. Maintain Zn:Cu ratio of ~8:1." },
      { name: "Selenium", emoji: "🌰🐟", topSources: "Brazil nuts (1–2 nuts = daily dose), yellowfin tuna, halibut, shrimp", plantSources: "Whole grains (content depends on soil), sunflower seeds, oatmeal", notes: "Soil selenium varies hugely by region. Brazil nuts from Se-rich soils are an exceptionally efficient source." },
      { name: "Iodine", emoji: "🌿🧂", topSources: "Seaweed (kelp, nori), cod, shrimp, canned tuna, dairy", plantSources: "Iodized salt (if used), potatoes with skin, prunes", notes: "Most reliable source is iodized salt (if used) or seaweed. Vegans avoiding iodized salt are at high deficiency risk." },
      { name: "Manganese", emoji: "🍵🌾", topSources: "Tea (black/green is highest source), mussels, oysters", plantSources: "Whole grains, pineapple, pecans, hazelnuts, brown rice, chickpeas", notes: "Easy to get from plant foods. Competes with iron. Most people have adequate intake from whole grains alone." },
    ]
  }
];
