function swap(array, idx1, idx2) {
    let new_arr = array;
    const temp = new_arr[idx1];
    new_arr[idx1] = new_arr[idx2];
    new_arr[idx2] = temp
    return new_arr;
}

function bubbleSort(array) {
    sorted_array = array;
    sorted_array.slice(1, -1).forEach((element, idx) => {
        let i = 1;
        while(element > sorted_array[idx+i]) {
            sorted_array = swap(sorted_array, idx, idx+1);
            i += 1;
        }
    });

    return sorted_array;
}


module.exports = {
    bubbleSort,
    swap
};