export default function quickSort(values) {
    function partition(unsortedArray, startIndex, endIndex) {
        let pivot = unsortedArray[startIndex];
        let lowIndex = startIndex + 1;
        let highIndex = endIndex;

        while(true) {
            while ((lowIndex <= highIndex) && (unsortedArray[highIndex] >= pivot)) highIndex -= 1;

            while ((lowIndex <= highIndex) && (unsortedArray[lowIndex] <= pivot)) lowIndex += 1;

            if (lowIndex <= highIndex) {
               [unsortedArray[lowIndex], unsortedArray[highIndex]] = [unsortedArray[highIndex], unsortedArray[lowIndex]];
            } else {
                break;
            }
        }

        [unsortedArray[startIndex], unsortedArray[highIndex]] = [unsortedArray[highIndex], unsortedArray[startIndex]];

        return highIndex;
    }

    function mquickSort(unsortedArray, startIndex, endIndex) {
        if(startIndex>=endIndex) {

            return;
        }

        let p = partition(unsortedArray, startIndex, endIndex);
        stepValues.push([...unsortedArray]);

        mquickSort(unsortedArray, startIndex, p-1);
        mquickSort(unsortedArray, p+1, endIndex);
    }

    let stepValues = [];
    mquickSort(values, 0, values.length-1);

    return stepValues;
}
