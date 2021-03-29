class Rover {
  constructor(position,mode,generatorWatts){
    
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    this.roverStatus ={mode,generatorWatts, position};
    console.log(8, this.roverStatus);
  }
   // Write code here!
  
  receiveMessage(message){
    this.message = [message.name];
    
    let results = [message.commands];
    let command;
    for (command in message.commands){
    if (command === 'STATUS_CHECK'){
      this.results = [this.rover.roverStatus];
    }else{
      this.results = [this.message.commands];
    }
    console.log(7,this.message, this.results);
    return(message, results);
   }}
};

module.exports = Rover;

  