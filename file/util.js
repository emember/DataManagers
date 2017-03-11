function getLevelNTopic(topic, n){
	var levels = topic.split('/');
	return levels[n];
}

module.exports={
	getLevelNTopic:getLevelNTopic
}