// Central content for the AdsXtreme homepage.
// Mirrors the copy authored in the original design prototype.

export type Leak = { n: string; t: string; d: string };
export type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
};
export type Service = { n: string; t: string; d: string };
export type Step = { n: string; t: string; d: string };
export type CaseStudy = {
  cat: string;
  brand: string;
  img: string;
  result: string;
  detail: string;
};
export type Testimonial = {
  source: string;
  initial: string;
  name: string;
  role: string;
  quote: string;
};
export type Faq = { q: string; a: string };

export const leaks: Leak[] = [
  {
    n: "01",
    t: "Wasted ad spend",
    d: "Broad bids, no negatives, and campaigns running on autopilot quietly burn budget every single day.",
  },
  {
    n: "02",
    t: "Invisible listings",
    d: "Poor keyword coverage and weak content mean your products never show up where buyers are searching.",
  },
  {
    n: "03",
    t: "Broken catalogs",
    d: "Variation errors, suppressed listings, and flat-file chaos cap your sales before ads ever get a chance.",
  },
];

export const stats: Stat[] = [
  {
    value: 65,
    prefix: "$",
    suffix: "M+",
    decimals: 0,
    label: "Revenue generated for clients",
  },
  {
    value: 120,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Brands scaled on Amazon",
  },
  {
    value: 3.7,
    prefix: "",
    suffix: "x",
    decimals: 1,
    label: "Average client ROAS",
  },
  {
    value: 42,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "Average ACoS reduction",
  },
];

export const services: Service[] = [
  {
    n: "01",
    t: "Amazon PPC & Sponsored Ads",
    d: "Sponsored Products, Brands & Display managed to your target ACoS — not vanity clicks. Daily optimization, bid sculpting, and keyword harvesting.",
  },
  {
    n: "02",
    t: "PPC Audit & Strategy",
    d: "A forensic teardown of wasted spend, campaign structure, and search-term data — with a clear, prioritized action plan you own.",
  },
  {
    n: "03",
    t: "Listing Optimization & SEO",
    d: "Keyword-rich, conversion-focused titles, bullets, and backend that rank higher and turn more clicks into actual orders.",
  },
  {
    n: "04",
    t: "A+ Content & Brand Store",
    d: "Premium A+ modules and a Brand Store that tell your story, lift conversion, and protect your margins from price wars.",
  },
  {
    n: "05",
    t: "Flat-File & Variation Handling",
    d: "Parent-child fixes, flat-file uploads, suppressed listings, and catalog errors resolved fast — without breaking what works.",
  },
  {
    n: "06",
    t: "Full-Service Account Management",
    d: "One accountable senior team owning PPC, catalog, and growth end to end — so nothing falls through the cracks.",
  },
];

export const steps: Step[] = [
  {
    n: "01",
    t: "Audit & Diagnose",
    d: "Deep account review to find every leak in spend, content, and catalog health.",
  },
  {
    n: "02",
    t: "Strategy & Roadmap",
    d: "A tailored plan built around your margins, goals, and category competition.",
  },
  {
    n: "03",
    t: "Build & Optimize",
    d: "We rebuild campaigns and listings, then optimize daily on real data.",
  },
  {
    n: "04",
    t: "Scale & Defend",
    d: "Push winners harder, expand reach, and defend your share of the Buy Box.",
  },
  {
    n: "05",
    t: "Report & Compound",
    d: "Clear reporting and compounding gains — month after month, no guesswork.",
  },
];

export const cases: CaseStudy[] = [
  {
    cat: "Home & Kitchen",
    brand: "Apex Home",
    img: "/assets/case-home.png",
    result: "ACoS 34% → 17%",
    detail:
      "Restructured the entire ad account and recovered margin to fund $1.2M/month in profitable sales.",
  },
  {
    cat: "Supplements",
    brand: "VitalCore",
    img: "/assets/case-supp.png",
    result: "4.6x ROAS in 90 days",
    detail:
      "Rebuilt listings and PPC from the ground up, doubling return on ad spend in a single quarter.",
  },
  {
    cat: "Pet Care",
    brand: "PawNest",
    img: "/assets/case-pet.png",
    result: "+212% revenue",
    detail:
      "Fixed broken variations and scaled Sponsored Brands while holding TACoS at a healthy 9%.",
  },
];

export const testimonials: Testimonial[] = [
  {
    source: "Upwork",
    initial: "M",
    name: "Marcus T.",
    role: "Founder, Home & Kitchen brand",
    quote:
      "They found leaks our last agency completely missed. ACoS dropped fast and sales actually went up — finally an agency that gets it.",
  },
  {
    source: "Google",
    initial: "S",
    name: "Sara L.",
    role: "Brand Manager, Supplements",
    quote:
      "Communication is clear, the strategy is sharp, and the results speak for themselves. Best decision we made this year.",
  },
  {
    source: "Upwork",
    initial: "D",
    name: "Daniel K.",
    role: "Owner, Pet brand",
    quote:
      "Our catalog was a mess of broken variations. They fixed everything and then scaled us — revenue more than tripled.",
  },
];

export const faqs: Faq[] = [
  {
    q: "What types of PPC campaigns do you manage?",
    a: "We manage Sponsored Products, Sponsored Brands, and Sponsored Display across both Seller Central and Vendor Central, structured around your target ACoS and margins.",
  },
  {
    q: "Do you work with brands or individual sellers?",
    a: "We focus on established brands and serious sellers who value structure, clear communication, and long-term, profitable growth — not quick hacks.",
  },
  {
    q: "What exactly does the free audit include?",
    a: "A senior strategist reviews your account for wasted ad spend, campaign structure, listing quality, and catalog health, then shows you the biggest opportunities — with no obligation.",
  },
  {
    q: "What's included in catalog management?",
    a: "Listing creation and optimization, variation and parent-child setup, flat-file handling, category and compliance fixes, suppressed-listing recovery, and ongoing catalog health monitoring.",
  },
  {
    q: "How soon can I expect results?",
    a: "PPC needs a short learning and data-collection window — typically a few weeks before consistent gains. Our 60-day guarantee keeps us accountable to measurable movement.",
  },
  {
    q: "How do I get started?",
    a: "Request your free audit above or email info@adsxtreme.com. We assess fit first, then map out exactly how we can move your numbers.",
  },
];
