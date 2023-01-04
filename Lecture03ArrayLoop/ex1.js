let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9,'Apple'];
function searchThreeSameNum(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;

    while (1) {
        if (i == arr1.length || j == arr2.length) {
            return 'No equal numbers';
        }

        if (arr1[i] < arr2[j]) {
            i++;
            continue;
        } else if (arr1[i] > arr2[j]) {
            j++;
            continue;
        } else if (arr1[i] == arr2[j]) 
            for (let k = 0; k < arr3.length; k++) {
                if (arr1[i] == arr3[k]) 
                    return arr1[i];
            }   

        return 'No equal numbers';
    }
}