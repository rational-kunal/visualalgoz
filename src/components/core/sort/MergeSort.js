
export default function mergeSort(values) {
    let stepValues = [];

    function merge (arr, l, m, r) {
        let i, j, k;
        let n1 = m-l+1;
        let n2 = r-m;

        let L = [], R = [];
        for (i=0; i<n1; i++) L.push(arr[l+i]);
        for (i=0; i<n2; i++) R.push(arr[m+1+i]);
        // console.log(L, R, n1, n2);
        i = j = 0;
        k = l;
        while (i<n1 && j<n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i<n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j<n2) {
            arr[k] = R[j];
            j++;
            k++;
        }

        let resultArray = [];
        for (i=l; i<=r; i++) resultArray.push({ position: i, value: arr[i], color: "focused" });
        if (resultArray.length !== 0) stepValues.push(resultArray);
        // stepValues.push(
        //     resultArray.map((value, index) => { return { position: index+startIndex, value: value, color: "focused" } })
        // );

        // return resultArray
    }

    function mmergeSort (arr, l, r) {
        // let resultArray = [];
        // for (let i=l; i<r; i++) resultArray.push({ position: i, value: arr[i], color: "split" });
        // if (resultArray.length !== 0) stepValues.push(resultArray);
        if (l<r) {
            let m = l+Math.floor((r-l)/2);

            mmergeSort(arr, l, m);
            mmergeSort(arr, m+1, r);

            merge(arr, l, m, r);
        }
    }

    mmergeSort([...values], 0, values.length-1);
    console.log("stepValues", stepValues);

    return stepValues;
}
