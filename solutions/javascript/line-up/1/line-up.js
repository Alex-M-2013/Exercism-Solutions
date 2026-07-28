export function format(name, number) {
    if (String(number).endsWith("1") && !String(number).endsWith("11")) {
        const suffix = "st";
        return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
    } else if (String(number).endsWith("2") && !String(number).endsWith("12")) {
        const suffix = "nd";
        return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
    } else if (String(number).endsWith("3") && !String(number).endsWith("13")) {
        const suffix = "rd";
        return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
    } else {
        const suffix = "th";
        return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
    }
}