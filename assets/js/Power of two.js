function isPowerOfTwo(n) {
    return (n > 0) && ((n & (n - 1)) === 0);
}

function checkPowerOfTwo() {
    var inputNumber = parseInt(document.getElementById("number").value);
    var resultElement = document.getElementById("result");

    if (isPowerOfTwo(inputNumber)) {
        resultElement.textContent = "Result: true - It is a power of two.";
    } else {
        resultElement.textContent = "Result: false - It is not a power of two.";
    }
}