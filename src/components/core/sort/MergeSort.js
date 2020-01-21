export default function mergeSort(values) {
    let stepValues = [];

    function merge (left, right, startIndex) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }

        resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        resultArray.forEach((value, index) => { values[ index+startIndex ] = value });
        stepValues.push([...values]);

        return resultArray
    }

    function mmergeSort (unsortedArray, leftIndex) {
        if (unsortedArray.length <= 1) {
            return unsortedArray;
        }
        const middle = Math.floor(unsortedArray.length / 2);

        const left = unsortedArray.slice(0, middle);
        const right = unsortedArray.slice(middle);

        return merge(
            mmergeSort(left, leftIndex), mmergeSort(right, middle), leftIndex
        );
    }

    mmergeSort([...values], 0);
    console.log(stepValues);

    return stepValues;
}
