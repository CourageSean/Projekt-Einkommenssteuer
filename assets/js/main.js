//hier habe ich die variablen definiert

let berechnungsJahr = document.getElementById("berechnungsjahr");
let zvE = document.getElementById("zvE");
let zvE2 = document.getElementById("zvE2");
let ESt = 0;
let verheiratet = document.getElementById("verheiratet");
let alleinstehend = document.getElementById("alleinstehend");

console.log(zvE2.value);
//hier habe ich eine funktion geschrieben die eine weitere enthält.
function berechnen() {
  let zvEn = Number(zvE.value);
  //abfrage ob 1 oder 2 personen versteuert werden
  verheiratet.checked
    ? (zvEn = (zvEn + Number(zvE2.value)) / 2)
    : (zvEn = zvEn);
  //hier ist die noch nicht ausgeführte definierte parameter funktion
  const berechner = function (a, b, c, e, f, h, i, j, k) {
    if (zvEn <= a) {
      ESt = 0;
      console.log(ESt);
    } else if (a + 1 <= zvEn && zvEn <= b) {
      let y = (zvEn - a) / 10000;
      ESt = (c * y + 1400) * y;
      console.log(ESt);
    } else if (b + 1 <= zvEn && zvEn <= e) {
      let z = (zvEn - b) / 10000;
      Est = (f * z + 2397) * z + h;
      console.log(ESt);
    } else if (e + 1 <= zvEn && zvEn <= i) {
      Est = 0.42 * zvEn - j;
      console.log(ESt);
    } else if (zvEn >= i + 1) {
      ESt = 0.45 * zvEn - k;
      console.log(ESt);
    } else {
      console.log("something went wrong");
    }
  };
  //dieser switch statement checkt welches jahr gewählt
  //wurde und führt dann die oben definierte funktion mit argumenten aus.
  console.log(zvE2.value);
  switch (berechnungsJahr.value) {
    case "0":
      berechner(
        9744.0,
        14753,
        995.21,
        57918,
        208.85,
        950.96,
        274612,
        9136.63,
        17374.99
      );

      break;

    case "1":
      berechner(
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

      break;

    case "2":
      berechner(
        9168,
        14254,
        980.14,
        55960,
        216.16,
        965.58,
        265356,
        8780.9,
        16740.68
      );
  }
}

//=======================================================================================================

// funktion und variablen definieren
const rechnen = function () {
  let nettoZuBrutto = document.getElementById("nettoZuBrutto");
  let bruttoZuNetto = document.getElementById("bruttoZuNetto");
  let satz7 = document.getElementById("satz7");
  let satz19 = document.getElementById("satz19");
  let betragInput = document.getElementById("betragInput");
  let ergebnis = document.getElementById("ergebnis");
  let endPreis = document.getElementById("endPreis");

  /*Ab hier modifiziere ich den eingegebenen Wert so dass wenn zb. 200.500,55 als Betrag 
  eingegeben wurde das komma "," mit "." ausgetauscht wird und das erste "." entfernt wird,
  damit ich mit dem input rechnen kann */

  let a = betragInput.value;

  let c = a.slice(-4);
  let b = a.slice(0, -4);

  c = c.replace(",", ".");
  b = b.replace(".", "");
  g = Number(b + c);

  g = g / 2; //bsp. rechnung

  //Hier überprüfe ich ob der eingebene Wert evt. Buchstaben enthält.
  if (isNaN(g)) {
    document.write("contains letters");
  } else {
    document.write("only numbers");
  }

  g = g.toFixed(2);

  /* Ab hier füge ich wieder komma hinzu und replace das letzte "." mit "," um es als string 
  auszugeben*/
  g = g.replace(".", ",");

  let h = g.slice(0, -6);
  let i = g.slice(-6);

  g = h + "." + i;
  console.log(g);
};

//============= experiments ==========

let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");

function experiment() {
  section2.style.zIndex = "2";
  section2.style.opacity = "1";
}

function closer() {
  section2.style.opacity = "0";
}
function pIndex() {
  section2.style.zIndex = "-2";
}
