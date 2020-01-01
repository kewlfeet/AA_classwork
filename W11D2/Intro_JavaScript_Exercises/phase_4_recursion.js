// const range = function(start, end) {
//     const retArray = []
//     if (start == end) {
//         retArray.spush(end)
//         return end 
//     } else {
//         retArray.push(start +1, end)
//     }
//     return retArray
// }

const range = function(start, end) {
    let retArray = [];
    if (start == end) {
        return end;
    }
    retArray.push(start);
    retArray += (range(start+1, end));
    return retArray;
}

// range (1,5)

//const range2 = function(start, end) {
//    const retArr = [];
//    for (let i = start; i <= end; i++) {
//        retArr.push(i);
//    }
//    return retArr;
//}

const sumRec = function(arr) {

}

const exponent = function(base, exp) {
    if (exp == 0) {
        return 1
    }
    answer = base * exponent(base, exp-1)
    return answer
}

const exponent2 = function(base, exp) {
    if (exp == 0) {
        return 1
    }
    else if (exp == 1) {
        return base
    }

}
