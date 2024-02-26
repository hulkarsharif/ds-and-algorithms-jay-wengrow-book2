function averageCelsius(fahrenheitReadings) {
    // Collect Celsius numbers here:
    var celsiusNumbers = [];

    // Convert each reading to Celsius and add to array:
    fahrenheitReadings.forEach(function (fahrenheitReading) {
        var celsiusConversion = (fahrenheitReading - 32) / 1.8;
        celsiusNumbers.push(celsiusConversion);
    });

    // Get sum of all Celsius numbers:
    var sum = 0.0;

    celsiusNumbers.forEach(function (celsiusNumber) {
        sum += celsiusNumber;
    });

    return sum / celsiusNumbers.length;
}

// Example usage:
var fahrenheitReadings = [32, 68, 86, 104];
console.log(averageCelsius(fahrenheitReadings)); // Output: 22.5
