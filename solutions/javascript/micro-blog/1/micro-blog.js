export const truncate = (input) => {
    const truncated = [];
    let count = 0;

    for (const char of input) {
        if (count === 5 || count > input.length) break;
        else truncated.push(char);
        count++;
    }

    return truncated.join("");
};
