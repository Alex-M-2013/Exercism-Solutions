export const processString = (input) => {
    try {
        if (String(input) !== input) throw new TypeError("Input is not a string");
        else if (input === "") return null;
        else if (input.length > 100 || input.length < 10) throw new RangeError("Input out of range");
        
        let hasLetters = false;
        let hasNumbers = false;

        for (const char of input.split("")) {
            if (char >= "0" && char <= "9") hasNumbers = true;
            else if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") hasLetters = true;
        }
        
        if (hasLetters && hasNumbers) throw new SyntaxError("Input must have either only letters or only numbers");
        else return input.toUpperCase();
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}