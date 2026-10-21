document.addEventListener("click", function (event) {
  const link = event.target.closest("a");
  if (!link || typeof gtag !== "function") return;
  const articleTitle = document.title.replace(" | FERRABRIO", "");
  if (link.matches('[data-track="article_to_product"]')) {
    gtag("event", "article_to_product", {
      article_title: articleTitle,
      destination_path: new URL(link.href, window.location.href).pathname,
    });
  } else if (link.matches('a[href*="#rfq"]')) {
    gtag("event", "article_to_rfq", { article_title: articleTitle });
  }
});
