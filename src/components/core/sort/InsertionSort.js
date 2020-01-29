
export default function insertSort(unsortedArray) {
    let positions = [];

    for (let i=0; i<unsortedArray.length; i++) {
        let key = unsortedArray[i];
        let j = i-1;
        let stepPosition = [];
        while (j>=0 && unsortedArray[j]>key) {
            unsortedArray[j+1] = unsortedArray[j];
            positions.push([
                { position: j, value: unsortedArray[j], color: "focused" },
                { position: j+1, value: unsortedArray[j+1], color: "focused" }
            ]);

            j--;
        }
        positions.push( [
            { position: j+1, value: key, color: "focused" },
            { position: i, value: unsortedArray[j+1], color: "focused" }
        ] );
        unsortedArray[j+1] = key;
    }

    return positions;
}
