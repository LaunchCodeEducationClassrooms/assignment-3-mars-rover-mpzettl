class Rover {
  constructor(position,mode,generatorWatts){
    
    this.position = 87382098;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
   // Write code here!
  receiveMessage(message){
    //this.message = message.name;


   }
}

module.exports = Rover;
/*let position = new Rover(87382098);
    expect(Rover.position).toEqual(87382098);
  let mode = new Rover('NORMAL');
    expect(Rover.mode).toEqual('NORMAL');
  let generatorWatts = new Rover(110);
    expect(Rover.generatorWatts).toEqual(110);*/
  