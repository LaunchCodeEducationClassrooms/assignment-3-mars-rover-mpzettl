class Message {
   // Write code here!
   constructor(name, commands){
     this.name = name;//'New message!';
     if (!name) {
       throw Error('Message name required.');
     }
     this.commands = ('Another message!', commands);
     
   }
}

module.exports = Message;
//let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
 //let message = new Message('Another message!', commands);
//expect(message.commands).toEqual(commands);