export default function bubbleSort(unsortedArray) {
    let positions = [];
    let position = [ ...Array(unsortedArray.length).keys() ];
    for (let i = 0; i < unsortedArray.length; i++) {
        for (let j = 0; j < unsortedArray.length - i - 1; j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;

                [position[j], position[j+1]] = [position[j+1], position[j]];
            }
            positions.push([
                { position: j, value: unsortedArray[j], color: "brown" },
                { position: j+1, value: unsortedArray[j+1], color: "brown" }
            ]);
        }
    }

    return positions
}
