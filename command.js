
class Command {
   constructor(commandType, value) {
     
     this.commandType = commandType;//('STATUS_CHECK');
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;//('MOVE', 20);

    
     //this.completed = completed;
      
 }};
 
 module.exports = Command;

 