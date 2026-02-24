// Единствен извор на вистина – менуваш само тука
window.RUNRADAR = {
  title: "RunRadar",
  tagline: "Track verified Solana runs. No hype. Only data.",
  subline: "Results channel shows top runs",
  badgeText: "100% transparent. No signals. Only archived data.",
  joinTelegramURL: "https://t.me/solrunresults",
  primaryCtaText: "Join Telegram",
  <script>
const cfg = window.RUNRADAR;

document.getElementById("title").innerText = cfg.title;
document.getElementById("tagline").innerText = cfg.tagline;
document.getElementById("subline").innerText = cfg.subline;
document.getElementById("cta").innerText = cfg.primaryCtaText;
document.getElementById("cta").href = cfg.joinTelegramURL;
document.getElementById("badge").innerText = cfg.badgeText;

fetch("https://api.runradar.app/api/closed?min_win=80&limit=1")
  .then(res => res.json())
  .then(data => {
    if(data.length > 0){
      const r = data[0];
      document.getElementById("lastRun").innerText =
        `Last verified run: +${r.pnl_pct}%`;
    } else {
      document.getElementById("lastRun").innerText =
        "No recent qualifying runs.";
    }
  })
  .catch(() => {
    document.getElementById("lastRun").innerText =
      "Live data unavailable.";
  });
</script>
