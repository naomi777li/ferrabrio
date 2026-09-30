document.addEventListener("click", function (event) {
  const link = event.target.closest('a[href*="#rfq"]');
  if (!link || typeof gtag !== "function") return;
  gtag("event", "article_to_rfq", {
    article_title: document.title.replace(" | FERRABRIO", ""),
  });
});
