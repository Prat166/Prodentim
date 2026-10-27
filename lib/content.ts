export type Ingredient = {
  name: string;
  group: "Probiotic strain" | "Supporting ingredient";
  general: string;
  caution: string;
  unverified?: boolean;
};

export const ingredients: Ingredient[] = [
  {
    name: "Lactobacillus paracasei",
    group: "Probiotic strain",
    general: "A probiotic bacterial species used in foods and supplements and studied in several areas of health research, including some oral-health research.",
    caution: "Research on a species or strain does not establish what a finished product does.",
  },
  {
    name: "Bifidobacterium lactis BL-04",
    group: "Probiotic strain",
    general: "A specific strain of a well-known probiotic species that is commercially available as a supplement ingredient and has been studied in general probiotic research.",
    caution: "Evidence is strain-specific, and most of it is not about teeth or gums.",
  },
  {
    name: "Lactobacillus reuteri",
    group: "Probiotic strain",
    general: "A probiotic species that occurs naturally in humans and has been studied in various areas, including some oral-health research.",
    caution: "Results from studies on a species do not automatically apply to this product.",
  },
  {
    name: "Inulin",
    group: "Supporting ingredient",
    general: "A plant fiber classed as a prebiotic, meaning certain beneficial bacteria can use it as food.",
    caution: "Its role here is general background, not a measured effect of the finished product.",
  },
  {
    name: "Malic acid",
    group: "Supporting ingredient",
    general: "An organic acid found naturally in fruits such as apples and strawberries, commonly used in foods for tartness and flavor.",
    caution: "The manufacturer’s page associates it with tooth whiteness. We could not independently verify that claim.",
    unverified: true,
  },
  {
    name: "Tricalcium phosphate",
    group: "Supporting ingredient",
    general: "A calcium salt used in supplements as a calcium source and to keep powders free-flowing.",
    caution: "Calcium is part of tooth structure, but that does not show this ingredient improves tooth health in a supplement. Check the label, since some manufacturer reference material mentions a similar compound, dicalcium phosphate.",
    unverified: true,
  },
  {
    name: "Peppermint",
    group: "Supporting ingredient",
    general: "A herb widely used for flavor and in oral-care products.",
    caution: "The manufacturer’s page makes health claims for peppermint. We could not independently verify them for this product.",
    unverified: true,
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is ProDentim?",
    a: "ProDentim is a dietary supplement marketed by its manufacturer as an oral probiotic in a chewable, dissolvable format. This website is an independent affiliate site, not the manufacturer’s site, and we have not tested the product.",
  },
  {
    q: "What are oral probiotics?",
    a: "Oral probiotics are products containing live microorganisms intended to be used in the mouth. Researchers are studying how the community of microorganisms in the mouth relates to oral health, but the evidence differs from strain to strain and product to product.",
  },
  {
    q: "What ingredients are listed for ProDentim?",
    a: "The manufacturer’s page lists three probiotic strains (Lactobacillus paracasei, Bifidobacterium lactis BL-04 and Lactobacillus reuteri) and four supporting ingredients (inulin, malic acid, tricalcium phosphate and peppermint). Always read the complete label on the product you receive, because formulas can change.",
  },
  {
    q: "Can ProDentim replace brushing or dental treatment?",
    a: "No. A supplement is not a substitute for brushing, flossing, regular dental examinations or any treatment your dentist recommends. The manufacturer’s own disclaimer also says its products are not intended to diagnose, treat, cure or prevent any disease.",
  },
  {
    q: "Are results guaranteed?",
    a: "No. Results vary from person to person, and nothing works for everyone. Refund or guarantee terms are set by the seller, so read them on the authorized product page before ordering.",
  },
  {
    q: "Where can I review the current price, shipping, directions and refund policy?",
    a: "On the authorized product page and the manufacturer’s policy pages, which are the only reliable source for current terms. We do not list prices or offers here because they can change.",
  },
  {
    q: "Is ProDentim safe for everyone?",
    a: "We cannot say that, and nobody can for every person. If you are pregnant or nursing, take medication, have a medical condition, or have a known allergy, review the full ingredient label and talk with a qualified healthcare professional before using any new supplement.",
  },
];
