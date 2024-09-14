const form = document.querySelector("form");

// This usecase give you an empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const Height = parseInt(document.querySelector("#Height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const results = document.querySelector("#results");

  if (Height === "" || Height < 0 || isNaN(Height)) {
    results.innerHTML = `Give a Valid Height ${Height}`;
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `Give a Valid Height ${height}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);

    // result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
