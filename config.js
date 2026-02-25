// Единствен извор на вистина – менуваш само тука
window.RUNRADAR = {
  brand: "RunRadar",

  // Hero
  headline: "Catch Solana runs before they go mainstream.",
  subheadline:
    "We track verified runs with real performance data. No hype. No “signals”. Just receipts.",

  // Links
  publicTelegramUrl: "https://t.me/solrunresults",
  betaApplyUrl: "https://t.me/solrunresults", // ако немаш форма уште, стави истиот линк; после ќе смениме во Tally/Google Form
  checkoutUrl: "https://your-checkout-link-here", // тука ќе биде Lemonsqueezy / Gumroad / Stripe link

  // Offer
  priceText: "$19/month (early adopters)",
  trialText: "14-day beta access (limited seats)",

  // Proof/metrics (ако сакаш да се прикажуваат и без API)
  fallbackStats: {
    detectedRuns: "—",
    bestRun: "+—%",
    avgPeak: "+—%",
    lastRun: "Loading..."
  },

  // API for public display (MUST be public endpoint without API key)
  apiBase: "https://api.runradar.app",
  apiLastClosedPath: "/api/closed-public?min_win=80&limit=1",
  apiStatsPath: "/api/stats-public" // ако немаш ваков endpoint, ќе остане fallback (не крши ништо)
};
