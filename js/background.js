(function() {
  document.querySelectorAll("[target='_blank']").forEach(a => {
    a.setAttribute("rel", "noopener noreferrer");
  });
}());