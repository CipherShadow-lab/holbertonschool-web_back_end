export default function cleanSet(set, startString) {
    let result = '';

    // If startString is empty or undefined, include all values
    if (!startString) {
        set.forEach(value => {
            result += value + '-';
        });
    } else {
        set.forEach(value => {
            if (value.startsWith(startString)) {
                result += value.slice(startString.length) + '-';
            }
        });
    }

    return result.endsWith('-') ? result.slice(0, -1) : result;
}
