var neo4j = require('node-neo4j');
var db = new neo4j(config.neo4jServer, config.neo4jKey);

function execute(req){
	console.log(req);
	
	db.cypherQuery(
		req.query,
		req.para,
		function (err, result) {
			if (err) {
				console.log(err);
			}else{
				console.log(result.data);	
			}			
		});	
}

module.exports={
	execute:execute
}