const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const weightGuide = document.querySelector("#weight-guide");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Enter a Valid Height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Enter a Valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        let guideMessage = "<h3>BMI Weight Guide</h3>";
        if (bmi < 18.6) {
            guideMessage += "<p>Under Weight</p>";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            guideMessage += "<p>Normal Weight</p>";
        } else {
            guideMessage += "<p>Over weight</p>";
        }

        weightGuide.innerHTML = guideMessage;
    }
});
