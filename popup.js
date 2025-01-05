document.body.addEventListener(
  "click",
  function (e) {
    navigator.clipboard.writeText(e.target.innerHTML);
  },
  true
);
