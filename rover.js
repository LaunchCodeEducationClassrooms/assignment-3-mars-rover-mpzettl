class Rover {
  constructor(position,mode,generatorWatts){
    
    this.position = 87382098;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    this.roverStatus = [mode,generatorWatts, position]
  }
   // Write code here!
  receiveMessage(message){
    this.message = message.name;
    let results = [this.message.commands];//
    //console.log( message, results)
    return (message, results);
   }
}

module.exports = Rover;

  