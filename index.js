var ElevatorController = require('./elevator-controller.js');

var controller = new ElevatorController();
controller.setFloorCount(10);
controller.setElevatorCount(4);

controller.requestElevator(11);
controller.requestElevator(0);
controller.requestElevator(5);
controller.requestElevator(2);
controller.requestElevator(7);
