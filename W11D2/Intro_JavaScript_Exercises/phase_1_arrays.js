Array.prototype.uniq = function() {
    const uniqArray = [];

    this.forEach(insert);
    function insert(num) {
        if (!uniqArray.includes(num)){
            uniqArray.push(num);
        }
    }
    return uniqArray;
}
Array.prototype.twoSum = function() {
    const positionPairs = []
    for(let i = 0; i < this.length; i++){
        for(let j = i+1; j < this.length; j++){
            if (this[i] + this[j] == 0){
                positionPairs.push([i, j]);
            }
        }
    }
    return positionPairs;
}
Array.prototype.transpose = function() {
    const transposeMatrix = []
    let temp = []
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            temp.push(this[j][i])
        }
        transposeMatrix.push(temp)
        temp = []
    }
    return transposeMatrix
}

// [[0,1,2],[3,4,5],[6,7,8]]
