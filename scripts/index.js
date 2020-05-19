
let navbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">geoCompaction</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="btn btn-secondary" id="btnHome">Home <span class="sr-only">(current)</span></button>
      </li>
      <li class="nav-item">
        <button class="btn btn-secondary" id="btnInfo">Test-Info</button>
      </li>
      <li class="nav-item">
        <button class="btn btn-secondary" id="btnManual">Test-Manual</button>
      </li>
      <li class="nav-item">
        <button class="btn btn-secondary" id="btnCalc">Calculations</button>
      </li>
    </ul>
  </div>
</nav>
`;


document.getElementById('navigation').innerHTML = navbar;

document.getElementById('btnHome').onclick = function () {
  location.href = `pages/index.html`;
};

document.getElementById('btnInfo').onclick = function () {
  location.href = `pages/TestInfo.html`;
};

document.getElementById('btnManual').onclick = function () {
  location.href = `pages/TestManual.html`;
};

document.getElementById('btnCalc').onclick = function () {
  location.href = `pages/calculations.html`;
};
