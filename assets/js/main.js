console.log("hello2");

let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
function experiment1() {
  console.log("fuck");
  section2.style.zIndex = "2";
  section2.style.opacity = "1";
}

function closer() {
  section2.style.opacity = "0";
}
function pIndex() {
  section2.style.zIndex = "-2";
}
function berechnung() {
  //===========================================

  let zvE1 = document.getElementById("zvE1");
  let zvE2 = document.getElementById("zvE2");
  let berechnungsJahr = document.getElementById("berechnungsjahr");
  let verheiratet = document.getElementById("verheiratet");
  let alleinstehend = document.getElementById("alleinstehend");
  let Est;
  let zvE;
  let Est_2021;

  const slice1 = function () {
    let a1 = zvE1.value;
    let b1 = a1.slice(0, -4);
    let c1 = a1.slice(-4);

    b1 = b1.replace(".", "");
    c1 = c1.replace(",", ".");
    let d1 = Number(b1 + c1);
    return d1;
  };

  const slice2 = function () {
    let a2 = zvE2.value;
    let b2 = a2.slice(0, -4);
    let c2 = a2.slice(-4);

    b2 = b2.replace(".", "");
    c2 = c2.replace(",", ".");
    let d2 = Number(b2 + c2);
    return d2;
  };

  if (alleinstehend.checked) {
    zvE = slice1();
  } else if (verheiratet.checked) {
    zvE = (slice1() + slice2()) / 2;
    console.log(zvE);
  }

  const hilfsFunktion = function (a, b, y1, c, z1, z2, d, e, f) {
    if (zvE <= a) {
      Est = 0;
    } else if (a + 1 <= zvE && zvE <= b) {
      y = (zvE - a - 1) / 10000;
      Est = (y1 * y + 1400) * y;
      console.log(Est);
    } else if (b + 1 <= zvE && zvE <= c) {
      z = (zvE - b) / 10000;
      Est = (z1 * z + 2397) * z + z2;
    } else if (c + 1 <= zvE && zvE <= d) {
      Est = 0.42 * zvE - e;
    } else if (d + 1 <= zvE) {
      Est = 0.45 * zvE - f;
      console.log("ja");
    }
  };

  if (berechnungsJahr.value === "33") {
    hilfsFunktion(
      9744,
      14753,
      995.21,
      57918,
      208.85,
      950.96,
      274612,
      9136.63,
      17374.99
    );

    if (verheiratet.checked) {
      Est = Est * 2;
      console.log(Est, "Est für 2 Personen");
    } else if (alleinstehend.checked) {
      console.log(Est, "Est für 1 Person");
    }
  } else {
  }
}
