class Clock {
    constructor() {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        let currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();
        this.printTime();
        this._tick();
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(this.hours + ':' + this.minutes + ':' + this.seconds)
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        setInterval(function increment(){
            if (this.seconds === 59) {
                if (this.minutes === 59){
                    if (this.hours === 23) {
                        this.hours = 0;
                        this.minutes = 0;
                        this.seconds = 0;
                    } else {
                        this.hours += 1;
                        this.minutes = 0;
                        this.seconds = 0;
                    }
                } else {
                    this.minutes += 1;
                    this.seconds = 0;
                }
            } else {
                this.seconds += 1;
            }
            this.printTime();
           
        }.bind(this), 1000);
        
    };

   
}

// const clock = new Clock();


function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Enter a number: ', ans => {
            let num = parseInt(ans);
            sum += num;
            console.log(sum);
            addNumbers(sum, numsLeft-1, completionCallback);
        });
    } else {
        completionCallback(sum);
        reader.close();
    }
    
}

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// const readline = require("readline");

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.y/n
    reader.question(`Is ${el1} > ${el2} ? (Enter (y/n))`, ans => {
        if (ans === 'y') {
            callback(true);
        } else if (ans === 'n') {
            callback(false);
        }
        else {
            askIfGreaterThan(el1, el2, callback)
        }
    });
}

// askIfGreaterThan(1, 2, callback => console.log("hi"));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    if (i == arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps)
        // console.log("made it")
    } else {
        madeAnySwaps = false;
        askIfGreaterThan(arr[i], arr[i+1], swap => {
            if (swap) {
                madeAnySwaps = true;
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            // console.log('else worked');
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
  
        if (madeAnySwaps) {
            madeAnySwaps = false;
      
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
          
        } else {
       
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });
Function.prototype.myBind = function (context) {
    return () => {
        this.apply(context);
    }
}

//Function Calling//
class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}
  
const turnOn = function() {
    console.log("Turning on " + this.name);
};
  
const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myThrottle = function(interval) {
    let tooSoon = false; 
    let that = this;
    return function() {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(function() {
                tooSoon = false;
            }, interval)
            that.apply(this);
        }
    }
}



class Neuron {
    fire() {
      console.log("Firing!");
      const neuron = new Neuron();
    
      neuron.fire = neuron.fire.myThrottle(500);
    }
  }
  
  const neuron = new Neuron();
  // When we create a new Neuron,
  // we can call #fire as frequently as we want
  
  // The following code will try to #fire the neuron every 10ms. Try it in the console:
//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);
  
//   // You can use clearInterval to stop the firing:
// clearInterval(interval);
  
//   Using Function#myThrottle, we should be able to throttle
//   the #fire function of our neuron so that it can only fire
//   once every 500ms:
  
//   neuron.fire = neuron.fire.myThrottle(500);
  
//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);
  
//   This time, if our Function#myThrottle worked correctly,
//   the Neuron#fire function should only be able to execute
//   every 500ms, even though we're still trying to invoke it
//   every 10ms!
  
//   If we want this behavior for ALL neurons, we can do the same logic in the constructor:
  
//   class Neuron {
//     constructor() {
//       this.fire = this.fire.myThrottle(500);
//     }
  
//     fire() {
//       console.log("Firing!");
//     }
//   }

///////////////////  My Debounce /////////////////////////////////
//solution
Function.prototype.myDebounce = function(interval) {
    // declare a variable outside of the returned function
    let timeout;
    // return a function that takes an arbitrary number of arguments
    return (...args) => {
      // declare a function that sets timeout to null and invokes this with args
      const fnCall = () => {
        timeout = null;
        this(...args);
      }
      // each time this function is called, it will clear the previous timeout
      // and create a new one that invokes fnCall after the interval has passed
      // since the timeout is reset every time the function is invoked, 
      // fnCall will only be called once the interval has passed without any new 
      // invocations
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, interval);
    }

// end of solution






Function.prototype.myDebounce = function(interval) {
    that = this;
    let timeout;
    return function() {
        setTimeout(function() {
            timeout = null;
            that.apply(this)
        }, interval)   
        clearTimeout 
    }
}

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

// Assign searchBar.search to the returned debounced version
searchBar.search = searchBar.search.myDebounce(500);
// searchBar.search
queryForHelloWorld();
