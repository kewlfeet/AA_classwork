Array.prototype.bubbleSort =  function() {
    let sortedArray = this;
    let sorted = false;

    while (!sorted) {
        sorted = true
        for (let i = 0; i < sortedArray.length - 1; i++){
            if (sortedArray[i] > sortedArray[i+1]){
                sorted = false;
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[i+1];
                sortedArray[i+1] = temp;
            }
        }
    }

    return sortedArray;
}

// [1,43,5,7,3,9,87].bubbleSort()

String.prototype.substrings = function() {
    let substrings = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i; j < this.length; j++){
            if (!substrings.includes(this.slice(i,j+1))) {
                substrings.push(this.slice(i,j+1));  
            }          
        }
    }
    return substrings
}

"banana".substrings()