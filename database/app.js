global.constants=require('./constants');
global.config =require('./config');
var util=require('./util');
var neo4jHandler = require('./neo4jHandler')

var mqtt = require('mqtt');
var mqttClient= mqtt.connect(config.mqttBroker);

mqttClient.on('connect', function () {
	mqttClient.subscribe(constants.DATABASE);
});
 
mqttClient.on('message', function (topic, message) {
	neo4jHandler.execute(JSON.parse(message.toString()));
});

