(function () {
  const script = document.currentScript;
  const base = new URL("./", script.src);
  const selects = document.querySelectorAll("select[data-editions]");
  const here = location.pathname;
  const m = here.match(/(\d{4}-\d{2}-\d{2})/);
  const currentSlug = m ? m[1] : null;

  function fill(editions) {
    const latest = editions[0];
    selects.forEach(function (sel) {
      const current = currentSlug || (latest && latest.date);
      sel.innerHTML = "";
      editions.forEach(function (ed) {
        const opt = document.createElement("option");
        opt.value = ed.date;
        opt.textContent = ed.label;
        if (ed.date === current) opt.selected = true;
        sel.appendChild(opt);
      });
      sel.onchange = function () {
        if (!sel.value) return;
        location.href = new URL(sel.value + "/", base).href;
      };
    });
  }

  fetch(new URL("editions.json", base))
    .then(function (r) { return r.json(); })
    .then(function (data) { fill(data.editions || []); })
    .catch(function () {});
})();
