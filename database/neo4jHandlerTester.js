global.config =require('./config');
var neo4jHandler = require('./neo4jHandler');

neo4jHandler.execute({query:'MATCH (n:company) RETURN n LIMIT 25', para:''});