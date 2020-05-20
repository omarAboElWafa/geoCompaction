let navSec = document.getElementById('navigation');
// let infoSec = document.getElementById('Info');
// let manualSec = document.getElementById('Manual');
// let calcSec = document.getElementById('Calc');


let navbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">geoCompaction</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/TestInfo">Test Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/testManual.html">Manual/Demo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Calculations</a>
      </li>
    </ul>
  </div>
</nav>
`;

console.log(navbar);



navSec.innerHTML = navbar;



// let testInfo = `Test Section`;
// let manual = `Manual Section`;
// let calc = `Calculations Section`;



// infoSec.innerHTML = testInfo;
// manualSec.innerHTML = manual;
// calcSec.innerHTML = calc;
