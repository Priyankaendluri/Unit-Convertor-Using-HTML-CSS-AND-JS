function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitType = document.getElementById('unitType').value;
    let result;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (unitType === "kmToMiles") {
        // Kilometers to Miles
        result = inputValue * 0.621371;
        result = result.toFixed(2) + " miles";
    } else if (unitType === "milesToKm") {
        // Miles to Kilometers
        result = inputValue / 0.621371;
        result = result.toFixed(2) + " kilometers";
    }

    document.getElementById('result').textContent = "Result: " + result;
}

