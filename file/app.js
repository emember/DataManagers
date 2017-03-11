global.constants=require('./constants');
global.config =require('./config');
var util=require('./util');
var s3handler = require('./s3handler')

var mqtt = require('mqtt');
var mqttClient= mqtt.connect(config.mqttBroker);

mqttClient.on('connect', function () {
	mqttClient.subscribe(constants.FILE);
});
 
mqttClient.on('message', function (topic, message) {
	var action =util.getLevelNTopic(topic, constants.ACTION_IDX);
	s3handler.execute(action, JSON.parse(message.toString()));
});

