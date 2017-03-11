function execute(action, para){
	switch(action){
		case constants.CREATE:
			create(para);
			break;
	}
}

// var config =require('./config');
// create();

function create(files){
	var AWS = require('aws-sdk');

	var awsConfig = new AWS.Config({
		accessKeyId: config.accessKeyId, 
		secretAccessKey:config.secretAccessKey,
		region: config.region
	});

	AWS.config=awsConfig;

	var s3 = new AWS.S3( { params: {Bucket: config.s3BucketName} } );	

	var date = new Date();
	files.forEach(function(item){
		var options={
			Key:item.filename,
		    Body:new Buffer(item.data.replace(/^data:image\/\w+;base64,/, ""),'base64'),
		    ContentEncoding: 'base64',
		    ContentType: 'image/jpeg'
		};

		s3.putObject(options, function(err,data){
			if(err){
				console.log('~~error~',err);
			}else{
				console.log('~~success~'+date.toTimeString());
			}
		});
	});
}


module.exports = {
	execute:execute
};
