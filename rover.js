class Rover {
  constructor(position,mode,generatorWatts){
    
    this.position = 87382098;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    
  }
   // Write code here!
  
  receiveMessage(message){
    this.message = message.name;
    
    this.results = message.commands;
    
    let command;//index identifier
    let roverStatus = new Rover();//{rover.position, rover.mode, rover.generatorWatts}
    for (command in this.results){
      
      for (let i=0; i<=(this.results).length; i++);{
        console.log(6.9, this.results[command].commandType);
        console.log(6.98, roverStatus);
    if (this.results[command].commandType==='STATUS_CHECK'){
      console.log(7, 'StatusCheck');
      console.log(8, roverStatus);
    }else{
      console.log(9, this.results);
    }
    //console.log(10, message, results);
    return(this.message, this.results);
   }}}
};

module.exports = Rover;

  