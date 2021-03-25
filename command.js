
class Command {
   constructor(commandType, value) {
     
     this.commandType = ('STATUS_CHECK');
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = ('MOVE', 20);
   
      this.roverStatus = ('STATUS_CHECK');
        if (!commandType) {
          throw Error("Command type required.");
        }
        
        this.roverPosition = rover.position;

        this.moveCommand =('MOVE')
        if (!commandType) {
          throw Error("Command type required.");
        }
        this.movement = (new Rover (rover.position)) + message.commands[1];
      
          this.modeChange=('MODE_CHANGE');
          if (!commandType) {
          throw Error("Command type required.");
        }
          this.newMode = rover.mode
      }
 }
 
 module.exports = Command;

 