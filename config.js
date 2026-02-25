// Единствен извор на вистина — менуваш само тука
window.RUNRADAR = {
  // Brand
  brand: "RunRadar",

  // Telegram (главен канал)
  telegramUrl: "https://t.me/solrunresults",

  // Lead capture (избери 1)
  // Option A (препорачано): Formspree endpoint (пример: https://formspree.io/f/xxxxxx)
  // Ако е празно -> ќе користи mailto fallback
  leadFormEndpoint: "",

  // mailto fallback (ако нема endpoint)
  leadToEmail: "contact@runradar.app",

  // Redirect после submit
  leadRedirectSeconds: 1,

  // Offer / Pricing
  priceAnchorText: "Regular price: $49/month",
  trialText: "Free 14-day access for early beta members.",
  noteText: "Full access during beta. No payment required now.",

  // Checkout (кога ќе имаш)
  checkoutUrl: "https://your-checkout-link-here",

  // Hero copy (без сленг)
  headline: "Find SOL Runs Before They Explode 💣💣💣",
  subheadline:
    "We monitor market activity and highlight tokens showing real growth — with clear, trackable performance data.",
  supportLine: "Built for traders who rely on measurable results, not opinions.",

  // CTA labels (ќе отвара modal)
  ctaPrimaryText: "Start Free 14-Day Access",
  ctaSecondaryText: "View Live Results",

  // Proof / Metrics (рачно за сега)
  showStats: true,
  fallbackStats: {
    detectedRuns: 312,
    bestRun: "1,020%",
    avgRun: "146%",
    lastRun: "Logged 3h ago"
  },

  // Sections
  problemTitle: "Most traders enter too late.",
  problemText:
    "By the time something is trending, the main move is often already over. RunRadar filters market activity and highlights tokens showing measurable momentum — before the hype phase.",

  howTitle: "How RunRadar works",
  howSteps: [
    { title: "Continuous market monitoring", text: "We track live market activity across the Solana ecosystem." },
    { title: "Momentum detection", text: "We identify tokens gaining traction based on measurable movement." },
    { title: "Performance transparency", text: "Every highlighted move is recorded so results stay trackable." }
  ],

  sellTitle: "Why traders switch to RunRadar",
  sellPoints: [
    { title: "Enter earlier with measurable data", text: "Less guessing. More informed timing." },
    { title: "Avoid emotional trades", text: "Focus on what the market is doing — not what people are saying." },
    { title: "See trackable performance", text: "Results stay verifiable instead of disappearing in chat messages." }
  ],

  featuresTitle: "What you get",
  features: [
    { title: "Live results feed", text: "A clean stream of tokens showing real movement, updated continuously." },
    { title: "Clear performance records", text: "Each highlighted move is logged so you can verify what happened." },
    { title: "No hype, no opinions", text: "The platform focuses on observable market behavior, not promises." },
    { title: "Fast access", text: "Get updates quickly and act while the move is still early." }
  ],

  faqTitle: "FAQ",
  faqs: [
    {
      q: "Is this a signals group?",
      a: "No. RunRadar tracks and highlights measurable market movement. It does not provide financial advice or trade instructions."
    },
    {
      q: "What happens after the 14-day beta?",
      a: "You’ll get the option to continue on a paid plan. Early beta users receive priority access and the best pricing."
    },
    {
      q: "Where do I access the results?",
      a: "After you request access, you’ll be redirected to the Telegram channel for updates and results."
    }
  ],

  // Modal copy
  modalTitle: "Get free beta access",
  modalText: "Enter your email to receive access details. After submitting, you’ll be redirected to Telegram.",
  modalPrivacy: "No spam. One email for access + important updates. Unsubscribe anytime.",

  // Footer / Legal
  disclaimer:
    "Disclaimer: RunRadar provides data and tracking tools only. Nothing here is financial advice. You are responsible for your own decisions."
};
