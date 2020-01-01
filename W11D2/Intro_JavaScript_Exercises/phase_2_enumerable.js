Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }

}

const duplicate = function (num) {
    return num * 2;
}

//[1,2,3,4].myEach(duplicate)

//[1,2,3,4].myEach((ele) => {console.log(ele * 2)});
// () => { whatever function does}

Array.prototype.myMap = function(callback) {
    const newArray = [];

    this.myEach((ele) => {newArray.push(callback(ele))});

    return newArray;
}

// [1,2,3,4,5].myMap(duplicate)
Array.prototype.myReduce = function(callback, initialValue) {
    let tempArray = this
    let acc;
    if (initialValue) {
        acc = initialValue
    } else {
        acc = tempArray.shift();
    }
    
    tempArray.myEach((ele) => {
        acc = callback(acc, ele)
    });
    
    // acc += callback(this.myEach)

    return acc
}

//[1,2,3].myReduce(func)