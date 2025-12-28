// Defensive Programming Example in JavaScript
function isSafe(input) {
    for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);
        // Conditional if to check if is present a character used in injections SQL or XSS
        if (char === "'" || char === "<" || char === ">") {
            return false; // Detected attack!
        }
    }
    return true;
}