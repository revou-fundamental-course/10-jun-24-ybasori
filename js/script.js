function toCelcius() {
  validateNumber(document.getElementById("celcius-input"));
  var celciusInput = document.getElementById("celcius-input").value;
  var result = parseInt(celciusInput) * 1.8 + 32;

  if (!isNaN(result)) {
    document.getElementById("fahrenheit-input").value = result;
    document.getElementById("cara-kalkulasi").innerHTML =
      celciusInput + "<sup>o</sup>C * (9/5) + 32 = " + result + "<sup>o</sup>F";
    document.getElementById("kalkulasi-btn").innerHTML =
      "Fahrenheit ke Celcius";
    document
      .getElementById("kalkulasi-btn")
      .setAttribute("data-kalkulasi", "F");
    ubahFormula();
  }
}

function toFahrenheit() {
  validateNumber(document.getElementById("fahrenheit-input"));
  var fahrenheitInput = document.getElementById("fahrenheit-input").value;
  var result = (parseInt(fahrenheitInput) - 32) / 1.8;

  if (!isNaN(result)) {
    document.getElementById("celcius-input").value = result;
    document.getElementById("cara-kalkulasi").innerHTML =
      fahrenheitInput +
      "<sup>o</sup>F - 32 * (5/9) = " +
      result +
      "<sup>o</sup>C";
    document
      .getElementById("kalkulasi-btn")
      .setAttribute("data-kalkulasi", "C");
    ubahFormula();
  }
}

function toReset() {
  document.getElementById("celcius-input").value = "";
  document.getElementById("fahrenheit-input").value = "";
}

function ubahFormula() {
  var celciusValue = document.getElementById("celcius-input").value
  var celciusInput = !isNaN(celciusValue) ? celciusValue : "";
  var fahrenheitValue = document.getElementById("fahrenheit-input").value;
  var fahrenheitInput = !isNaN(fahrenheitInput) ? fahrenheitInput : "";
  var kalkulasi = document
    .getElementById("kalkulasi-btn")
    .getAttribute("data-kalkulasi");
  if (kalkulasi == "F") {
    document.getElementById("kalkulasi-btn").innerText =
      "Fahrenheit ke Celcius";
    document.getElementById(
      "title-change"
    ).innerHTML = `Celcius (<sup>o</sup>C) ke Fahrenheit
    (<sup>o</sup>F)`;
    document.getElementById(
      "formula-text"
    ).innerHTML = `Suhu <span class="big-s">S</span> dalam derajat Fahrenheit
    (<sup>o</sup>F) sama dengan suhu <span class="big-s">S</span> dalam
    derajat Celcius (<sup>o</sup>C) kali 9/5 tambah 32.`;
    document.getElementById("cara-kalkulasi").innerHTML =
      celciusInput +
      "<sup>o</sup>C * (9/5) + 32 = " +
      fahrenheitInput +
      "<sup>o</sup>F";

    document.getElementById(
      "formula-1"
    ).innerHTML = `<span class="normal-s">S</span><sub>(<sup>o</sup>F)</sub> = (<span
            class="normal-s"
            >S</span
          ><sub>(<sup>o</sup>F)</sub> x 9/5) + 32`;
    document.getElementById(
      "formula-2"
    ).innerHTML = `<span class="normal-s">S</span><sub>(<sup>o</sup>F)</sub> = (<span
              class="normal-s"
              >S</span
            ><sub>(<sup>o</sup>F)</sub> x ${9 / 5}) + 32`;
  } else {
    document.getElementById("kalkulasi-btn").innerText =
      "Celcius ke Fahrenheit";
    document.getElementById(
      "title-change"
    ).innerHTML = `Fahrenheit (<sup>o</sup>F) ke Celcius
    (<sup>o</sup>C)`;
    document.getElementById(
      "formula-text"
    ).innerHTML = `Suhu <span class="big-s">S</span> dalam derajat Celcius
    (<sup>o</sup>C) sama dengan suhu <span class="big-s">S</span> dalam
    derajat Fahrenheit (<sup>o</sup>F) kurang 32 kali 5/9.`;
    document.getElementById("cara-kalkulasi").innerHTML =
      fahrenheitInput +
      "<sup>o</sup>F - 32 * (5/9) = " +
      celciusInput +
      "<sup>o</sup>C";
    document.getElementById(
      "formula-1"
    ).innerHTML = `<span class="normal-s">S</span><sub>(<sup>o</sup>C)</sub> = (<span
            class="normal-s"
            >S</span
          ><sub>(<sup>o</sup>C)</sub> - 32) x 5/9`;
    document.getElementById(
      "formula-2"
    ).innerHTML = `<span class="normal-s">S</span><sub>(<sup>o</sup>C)</sub> = (<span
              class="normal-s"
              >S</span
            ><sub>(<sup>o</sup>C)</sub> - 32) x ${5 / 9}`;
  }
}

function ubahKalkulasi() {
  var kalkulasi = document
    .getElementById("kalkulasi-btn")
    .getAttribute("data-kalkulasi");

  if (kalkulasi == "F") {
    kalkulasi = "C";
  } else {
    kalkulasi = "F";
  }

  document
    .getElementById("kalkulasi-btn")
    .setAttribute("data-kalkulasi", kalkulasi);

  ubahFormula();
}

function validateNumber(element) {
  [...element.parentElement.getElementsByClassName("error")].forEach(function (
    el
  ) {
    el.remove();
  });
  var re = /^\d+$/g;
  if (!re.test(element.value)) {
    var pError = document.createElement("p");
    pError.classList.add("error");
    pError.innerHTML = "not a number";
    element.parentElement.append(pError);
  }
}

function validate(e) {
  validateNumber(e);
}
