export default function bubbleSort(values) {
    let stepValues = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
                stepValues.push([...values]);
            }
        }
    }

    return stepValues
}
