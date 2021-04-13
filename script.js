function load() {
  function thx() {
    document.querySelector("#honnan").innerHTML = "<h1>Köszönöm</h1>";
  }

  console.log("Futok!");
  const ev = document.getElementById("hova");
  console.log(ev);
  ev.addEventListener("change", thx);
}

window.addEventListener("load", load);
