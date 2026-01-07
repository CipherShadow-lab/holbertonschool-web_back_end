export default function createInt8TypedArray(length, position, value) {

    // Create an ArrayBuffer of specified length
    const buffer = new ArrayBuffer(length);

    //Create a DataView for the ArrayBuffer
    const dataView = new DataView(buffer);

    // Check if position is within bounds
    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    // Set value at specified position using setInt8
    dataView.setInt8(position, value);

    // Return DataView object
    return dataView;
}
