
const sum = function() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

const sum2 = function(...names) {
    let sum = 0;
    for(let i = 0; i < names.length; i++){
        sum += names[i];
    }
    return sum;
}

// console.log(sum2(1, 2, 3, 4, 5));

///////////////////// My Bind //////////////////////////////////

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
}
  
class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

Function.prototype.myBind = function(context) {
    const args = Array.from(arguments).slice(1);
    const that = this;
    return function() {
        // this.apply(context);
        const allArgs = args.concat(Array.from(arguments));
        that.apply(context, allArgs);
        // this(arguments);
    }
}

Function.prototype.myBind2 = function(context, ...args) {
    const that = this;
    return function() {
        const allArgs = args.concat(Array.from(arguments));
        that.apply(context, allArgs);
        //  console.log(that);
    }
}




// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

///////////////////////// End Of MyBind /////////////////////////////////////


////////////////////////////////Curried Sum///////////////////////////////
function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}
  
// sumThree(4, 20, 6); // == 30

Function.prototype.curry = function(numArgs) {
    numbers = Array.from(arguments).slice(1);
    that = this;
    // console.log(this)
    const _curry = function (num) {
        numbers.push(num);
        // console.log(num);
        // console.log(that);
        // console.log(this);
        if (numbers.length === numArgs) {
            return that(...numbers);
        } else {
            return _curry;
        }
    }
    return _curry;
     
}

Function.prototype.curry2 = function(numArgs) {
    numbers = Array.from(arguments).slice(1);
    that = this;
    // console.log(this)
    const _curry = function (num) {
        numbers.push(num);
        // console.log(num);
        // console.log(that);
        // console.log(this);
        if (numbers.length === numArgs) {
            return that.apply(0, numbers);
        } else {
            return _curry;
        }
    }
    return _curry;
     
}


// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// console.log(sumThree.curry2(3)(4)(20)(6)); // == 30

function curriedSum(numValues) {
    const numbers = [];
    const _curriedSum = function(num) {
        // numbers = Array.from(arguments)
        numbers.push(num);
        if (numValues === numbers.length) {
            let sum = 0;
            for (let i = 0; i < numValues; i++) {
                sum = sum + numbers[i];
            }
            return sum;
        } else {
            return _curriedSum;
        }
        // console.log()
    }
    return _curriedSum;
}

// const sum3 = curriedSum(4);
// sum3(5)(30)(20)(1);
// console.log(sum3(5)(30)(20)(1));
//////////////////////////////////End of Curried Sum////////////////////////////




