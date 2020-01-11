import { htmlGenerator } from "./warmup";
const clockElement = document.getElementById("clock");

class Clock {
    constructor() {
        // 1. Create a Date object.
        const currentTime = new Date();
        
        // 2. Store the hour, minute, and second.
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();
        
        // 3. Call printTime.
        htmlGenerator(this.printTime(), clockElement);
        
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }
    
    printTime() {
        // Format the time in HH:MM:SS
        const timeString = [this.hours, this.minutes, this.seconds].join(":");

        htmlGenerator(timeString, clockElement);

        // Use console.log to print it.
        // console.log(timeString);
        return timeString;
    }
    
    _tick() {
        // 1. Increment the time by one second.
        this._incrementSeconds();
        
        // 2. Call printTime.
        this.printTime();
    }
    
    _incrementSeconds() {
        // 1. Increment the time by one second.
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }
    
    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }
    
    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }
}

const clock = new Clock();


// http://127.0.0.1:5500/pocket_projects/dist/index.html
// htmlGenerator(clock.printTime())