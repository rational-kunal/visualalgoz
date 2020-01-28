export default function quickSort(values) {
    function partition(unsortedArray, startIndex, endIndex) {
        let pivot = unsortedArray[startIndex];
        let lowIndex = startIndex + 1;
        let highIndex = endIndex;

        stepValues.push([
            { position: lowIndex, value: unsortedArray[lowIndex], color: "split" },
            { position: highIndex, value: unsortedArray[highIndex], color: "split" },
            { position: startIndex, value: unsortedArray[startIndex], color: "pivot" }
        ]);

        while(true) {
            while ((lowIndex <= highIndex) && (unsortedArray[highIndex] >= pivot)) {
                highIndex -= 1;
                stepValues.push([
                    { position: lowIndex, value: unsortedArray[lowIndex], color: "split" },
                    { position: highIndex, value: unsortedArray[highIndex], color: "split" },
                    { position: startIndex, value: unsortedArray[startIndex], color: "pivot" }
                ]);
            }

            while ((lowIndex <= highIndex) && (unsortedArray[lowIndex] <= pivot)) {
                lowIndex += 1;
                stepValues.push([
                    { position: lowIndex, value: unsortedArray[lowIndex], color: "split" },
                    { position: highIndex, value: unsortedArray[highIndex], color: "split" },
                    { position: startIndex, value: unsortedArray[startIndex], color: "pivot" }
                ]);
            }

            if (lowIndex <= highIndex) {
               [unsortedArray[lowIndex], unsortedArray[highIndex]] = [unsortedArray[highIndex], unsortedArray[lowIndex]];
            } else {
                break;
            }

            stepValues.push([
                { position: lowIndex, value: unsortedArray[lowIndex], color: "focused" },
                { position: highIndex, value: unsortedArray[highIndex], color: "focused" },
                { position: startIndex, value: unsortedArray[startIndex], color: "pivot" }
            ]);
        }

        [unsortedArray[startIndex], unsortedArray[highIndex]] = [unsortedArray[highIndex], unsortedArray[startIndex]];
        stepValues.push([
            { position: startIndex, value: unsortedArray[startIndex], color: "focused" },
            { position: highIndex, value: unsortedArray[highIndex], color: "focused" }
        ]);

        return highIndex;
    }

    function mquickSort(unsortedArray, startIndex, endIndex) {
        if(startIndex>=endIndex) {

            return;
        }

        let p = partition(unsortedArray, startIndex, endIndex);
        // stepValues.push([...unsortedArray]);

        mquickSort(unsortedArray, startIndex, p-1);
        mquickSort(unsortedArray, p+1, endIndex);
    }

    let stepValues = [];
    mquickSort(values, 0, values.length-1);

    console.log(stepValues);

    return stepValues;
}
