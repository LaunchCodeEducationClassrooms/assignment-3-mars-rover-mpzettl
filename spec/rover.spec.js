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
it("response returned by receiveMessage contains name of message", function(){
  let receiveMessage = new Message('That this passes is nonsense!');
  expect(receiveMessage.name).toEqual('New message!');
});

//Test 9
it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  console.log(commands);
  let rover = new Rover(98382); 
  let response = rover.receiveMessage(message);
  console.log(response);
  
  expect(rover.mode = 'LOW_POWER', rover.generatorWatts = 110, rover.position = 98382)
  console.log(response);
});
/*
Test 10
it("responds correctly to status check command", function(){
  let receiveMessage = new Message(['MOVE', 25], ['STATUS_CHECK']);expect(response.results[0].roverStatus.position).toEqual(87382123);expect(response.results[1].completed).toBeTrue;

}

For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy.
See the Rover Command Types table for more details.
Test 11
"responds correctly to mode change command".

The test should check the completed property and rover mode for accuracy.
The rover has two modes that can be passed a values to a mode change command, 'LOW_POWER' and 'NORMAL'.
Test 12
"responds with false completed value when attempting to move in LOW_POWER mode".

The test should check the completed property for accuracy and confirm that the rover position did not change.
Use the Rover Modes table for guidance on how to handle move commands in different modes.
Test 13
"responds with position for move command".

A MOVE command will update the rover's position with the position value in the command.*/


});
/*let response = rover.receiveMessage(message);8
    expect(response.message).toEqual('TA power');8
    expect(response.results[0].completed).toBeTrue;9
    expect(response.results[1].roverStatus.position).toEqual(4321);9
    expect(response.results[2].completed).toBeTrue;9
    expect(response.results[3].completed).toBeFalse;10
    expect(response.results[4].roverStatus.position).toEqual(4321);11
    expect(response.results[4].roverStatus.mode).toEqual('LOW_POWER');12
    expect(response.results[4].roverStatus.generatorWatts).toEqual(110);13*/