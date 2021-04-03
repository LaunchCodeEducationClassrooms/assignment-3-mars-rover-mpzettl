class Rover {
  constructor(position,mode,generatorWatts){
    
    this.position = 87382098;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    
  }
   // Write code here!
  //console.log(22, rover);
  receiveMessage(message){
    this.message = message;
    
    let completed = Boolean(false);
    let roverStatus = new Rover();

    

    let command;
    
    
    for (command in message.commands){
      if (message.commands[command].commandType ===('STATUS_CHECK')){
        completed = true;
      }
      else if (message.commands[command].commandType ===('MOVE')){
        if (!rover.mode === ('LOW_POWER')){
          completed = true;
        }
    
      }
      else if (message.commands[command].commandType ===('MODE_CHANGE')){
        completed = true;
      }console.log('9***Completed', message.commands[command],completed)

      this.results = {completed, roverStatus};
      console.log(90, this.results);
      return completed;
    };
    
    //let command;//index identifier
    //
    /*for (command in this.message){
      
      for (let i=0; i<=(this.message).length; i++);{
        console.log('rm1', this.message[command].commandType, this.message[command].value);
        console.log('rm2', this.results);
    if (this.message[command].commandType==='STATUS_CHECK'){
      console.log('rm3', 'StatusCheck');
      console.log('rm4', results[roverStatus]);
    }else{
      ('rm5', this.message[command].commandType, this.message[command].value)
      console.log('rm6', this.message, this.results);
    }*/
    //console.log(10, message, results);
    return(message, results);
   }//}//}
};

module.exports = Rover;

  