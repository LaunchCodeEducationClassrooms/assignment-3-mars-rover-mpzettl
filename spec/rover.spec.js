const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  /* 7 tests here!
  Rover Tests¶
Create spec/rover.spec.js and write the following tests. Write the code to make them pass in rover.js. Remember to use the given phrase as the test description.*/

//Test 7
it("constructor sets position and default values for mode and generatorWatts", function() {
//. Refer to the Rover Class description above for these default values.
  let rover = new Rover(87382098);
    expect(rover.position).toEqual(87382098);
  let mode = new Rover('NORMAL');
    expect(rover.mode).toEqual('NORMAL');
  let generatorWatts = new Rover(110);
    expect(rover.generatorWatts).toEqual(110);
  });

//Test 8
it("8 response returned by receiveMessage contains name of message", function(){
  
  let commands = [new Command('STATUS_CHECK')];
  let message = new Message('New Message 002', commands);
  let rover = new Rover(002);
  
  let response = rover.receiveMessage(message);
  console.log(`SPECtest ${2, message}`)
  console.log(4, rover.receiveMessage(message),"\n", message,"\n", response);

  expect(response.message).toEqual('New Message 002');
});

//Test 9
it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  //console.log(commands);
  let rover = new Rover(98382); 
  let response = rover.receiveMessage(message);
  //console.log(9.1, response, rover.mode,rover.generatorWatts, rover.position);
  
  expect(rover.mode = 'LOW_POWER', rover.generatorWatts = 110, rover.position = 98382)
  //console.log(9.2, rover.mode, rover.generatorWatts, rover.position);
});

//Test 10
it("responds correctly to status check command", function(){
  let commands = [new Command('STATUS_CHECK')];
  let message = new Message('Next Message 003', commands);
  //console.log(10.1, commands);
  //console.log(10.2, message);
  let rover = new Rover(87382098);//, 'NORMAL',110);
  //console.log(10.3, rover);
  let response = rover.receiveMessage(message);
  //console.log(10.4, message);
  //console.log(10.5, response);
  //console.log(10.6, commands); 
  //console.log(10.7,rover);

  expect(rover.position).toEqual(87382098);
  expect(rover.mode).toEqual('NORMAL');
  expect(rover.generatorWatts).toEqual(110);
  //expect(response.results.completed).toBeTrue;
  //expect(response.results[2])
  //console.log(10.8, rover.mode, rover.generatorWatts, rover.position);
});

//For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy.
//See the Rover Command Types table for more details.

//Test 11
it("responds correctly to mode change command", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
  //console.log(11.0, commands);
  let message = new Message('Test mode change command to completed-true', commands);
  //console.log(11.1, message);
  let rover = new Rover(87382098);
  //console.log(11.2, rover);
  let response = rover.receiveMessage(message);

  
  //console.log(11.3, response);
  
  //console.log(11.4, response.completed);

  //console.log(11.5, rover.mode);

  expect(response.completed).toBeTrue;
  //console.log(11,response.completed);
});

//The test should check the completed property and rover mode for accuracy.
//The rover has two modes that can be passed a values to a mode change command, 'LOW_POWER' and 'NORMAL'.

//Test 12
it("responds with false completed value when attempting to move in LOW_POWER mode", function(){    
 let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command('MOVE', 90000000)];
  
  let message = new Message('Test mode change to "LOW_POWER" command to completed-false', commands);
  let rover = new Rover(89898989);
  
  //console.log(12, message, rover);

  let response = rover.receiveMessage(message);

  //console.log(12.1, message.commands, response, rover, response.completed);
  
 expect(response.completed).toBeFalse;
});

//The test should check the completed property for accuracy and confirm that the rover position did not change.
//Use the Rover Modes table for guidance on how to handle move commands in different modes.//

//Test 13
//new Command('MODE_CHANGE', 'NORMAL'),
let commands = [new Command('MOVE', 50000000)];
  
let message = new Message('Test  "MOVE" command to return new position', commands);
  
it("responds with position for move command", function(){
let rover = new Rover(89898989);
  
  

  let response = rover.receiveMessage(message);
  //console.log(13, message, rover.position, rover.mode);
  //console.log(12.1, message.commands, response, rover, response.completed);
  console.log(0,"test",response, rover, rover.message);
 expect(response.position).toBe(50000000)
 /**/
});

//A MOVE command will update the rover's position with the position value in the command.


});

/*let response = rover.receiveMessage(message);8
    expect(response.message).toEqual('TA power');9
    expect(response.results[0].completed).toBeTrue;9
    expect(response.results[1].roverStatus.position).toEqual(4321);9
    expect(response.results[2].completed).toBeTrue;9
    expect(response.results[3].completed).toBeFalse;10
    expect(response.results[4].roverStatus.position).toEqual(4321);11
    expect(response.results[4].roverStatus.mode).toEqual('LOW_POWER');12
    expect(response.results[4].roverStatus.generatorWatts).toEqual(110);13*/