class Rover {
  constructor(position,mode,generatorWatts){
    
    //this.position =87382098;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    this.position = position;
  };
   // Write code here!
  
  receiveMessage(message){
    
    let completed = Boolean();
    let rover = new Rover();
    let roverStatus = rover;
    

    
    let results = {completed, roverStatus};
    
    let command;
    
    for (command in message.commands){
      //console.log(12.79, 'loop execution marker1 ', message.commands[command].commandType)
      if (message.commands[command].commandType ===('MODE_CHANGE')){
        rover.mode = message.commands[command].value;
        //console.log(12.71, 'Mode Change completed',  rover.mode);
        completed = true;
      }
      else if (message.commands[command].commandType ===('MOVE')){
        if (rover.mode ===('LOW_POWER')){
         // console.log(12.72, rover.position);
    
          completed = false;
          //console.log(12.819, "Can't be moved in this state.", roverStatus, completed)
          rover.position = message.commands[command].value;
          
        }else if (rover.mode === ('NORMAL')){
          completed = true;
          rover.position = message.commands[command].value;
          //console.log(12.73, rover.position);
   
          //console.log(12.82, (`Move completed to position: ${rover.position = message.commands[command].value}\n`), roverStatus);
          
          //console.log(12.821, message.commands[command);  
      }
      else if (message.commands[command].commandType ===('STATUS_CHECK')){
        //console.log(12.74, rover.position);
    
        //console.log(12.81, 'Status Check completed', roverStatus);
        completed = true;
      }
      
      //console.log(12.5, message.commands[command],completed)

      //console.log(12.9, results)
      
    };
    
    //console.log(90, completed);
    
   }
   //console.log(90.1, results, results.completed);
   return(message, results, rover);
  };
};

module.exports = Rover;

  