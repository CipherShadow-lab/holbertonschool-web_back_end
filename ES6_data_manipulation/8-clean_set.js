export default function cleanSet(set, startString) {
    const result = [];

    // Check startString is not undefined or empty
    set.forEach(value => {
        if (startString && value.startsWith(startString)) {
            result.push(value.slice(startString.length));
        } else if (!startString) {
            result.push(value);
        }
    });

    return result.join('-');
}
