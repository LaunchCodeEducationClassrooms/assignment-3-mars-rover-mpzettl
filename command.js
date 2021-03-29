
class Command {
   constructor(commandType, value) {
     
     this.commandType = commandType;//('STATUS_CHECK');
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;//('MOVE', 20);
   
      
 }};
 
 module.exports = Command;

 