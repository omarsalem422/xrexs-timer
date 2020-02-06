class Timer {
    constructor(durationInput, startButton, pauseButton, callback) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
  
      if (callback) {
        this.onStart = callback.onStart;
        this.onTick = callback.onTick;
        this.onComplete = callback.onComplete;
      }
      // this.startButton.addEventListener('click', this.start.bind(this) );
      this.startButton.addEventListener("click", this.start);
      this.pauseButton.addEventListener("click", this.pause);
    }
  
    // start() {
    //   //console.log("Time to start timer ...");
    //   this.importantMethodToCall()
    // }
    // importantMethodToCall() {
    //   console.log("VERY VERY IMPORTANT");
    // }
  
    start = () => {
      if (this.onStart) {
        this.onStart(this.timeRemaining);
      }
      this.tick();
      this.interval = setInterval(this.tick, 20);
    };
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
        if(this.onComplete) {
          this.onComplete();
        }
      } else {
        this.timeRemaining = this.timeRemaining - 0.02;
        if (this.onTick) {
          this.onTick(this.timeRemaining)
        }
      }
    };
  
    pause = () => {
      clearInterval(this.interval);
    };
  
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRemaining(time) {
      this.durationInput.value = time.toFixed(2);
    }
  }
  