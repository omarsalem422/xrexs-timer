class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // this.startButton.addEventListener('click', this.start.bind(this) );
    this.startButton.addEventListener('click', this.start);

  }
  // start() {
  //   //console.log("Time to start timer ...");
  //   this.importantMethodToCall()
  // }

  start = () => {
    console.log("Time to start timer ...");
    //this.importantMethodToCall();
  }
  // importantMethodToCall() {
  //   console.log("VERY VERY IMPORTANT");
  // }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
