class Rover {
  constructor(position,mode,generatorWatts){
    
    this.position = 87382098;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    this.roverStatus ={mode,generatorWatts, position};
  }
   // Write code here!
  receiveMessage(message){
    this.message = [message.name, message.commands];
    if (message.commands === 'STATUS_CHECK'){
      this.results = [message.commands], roverStatus;
    }else{
      this.results = [this.message.commands];
    }
    console.log(7,this.message);
    return(message);
   }
};

module.exports = Rover;

  