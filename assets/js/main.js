let checkBox = document.getElementById("checkbox");
let verheiratetLabel = document.getElementById("label-verheiratet");
let alleinstehendLabel = document.getElementById("label-alleinstehend");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let person1 = document.getElementById("person1");
let person2 = document.getElementById("person2");

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

  if (berechnungsJahr.value === "2021") {
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
    } else {
      console.log(Est, "Est für 1 Person");
    }
  } else if (berechnungsJahr.value === "2020") {
    hilfsFunktion(
      9408,
      14532,
      972.87,
      57051,
      212.02,
      972.79,
      270500,
      8963.74,
      17078.74
    );
    if (verheiratet.checked) {
      Est = Est * 2;
      console.log(Est, "Est für 2 Personen 2020");
    } else {
      console.log(Est, "Est für 1 Person 2020");
    }
  }else if(berechnungsJahr.value === "2019")
}

//===================================

test = () => {
  if (checkBox.checked) {
    console.log("is checked");
  } else {
    console.log("not checked");
  }
};

theSwitch = () => {
  if (checkBox.checked) {
    verheiratet.checked = true;
    verheiratetLabel.style.color = "#ccc";
    alleinstehendLabel.style.color = "rgb(82, 79, 79)";
    zvE2.style.visibility = "visible";
    person1.style.visibility = "visible";
    person2.style.visibility = "visible";
    zvE1.placeholder = "Person 1";
    zvE2.placeholder = "Person 2";
  } else if (!checkBox.checked) {
    alleinstehend.checked = true;
    verheiratetLabel.style.color = "rgb(82, 79, 79)";
    alleinstehendLabel.style.color = "#ccc";
    zvE2.style.visibility = "hidden";
    person1.style.visibility = "hidden";
    person2.style.visibility = "hidden";
    zvE1.placeholder = "0,00 €";
    zvE2.placeholder = "0,00 €";
  }
};
