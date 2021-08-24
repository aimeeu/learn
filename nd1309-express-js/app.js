//Importing Express.js module
const express = require("express");
//Importing BodyParser.js module
const bodyParser = require("body-parser");

/**
 * Class Definition for the REST API
 */
class BlockAPI {

    /**
     * Constructor that allows initialize the class 
     */
    constructor() {
		this.app = express();
		this.initExpress();
		this.initExpressMiddleWare();
		this.initControllers();
		this.start();
	}

    /**
     * Initilization of the Express framework
     */
	initExpress() {
		this.app.set("port", 9000);
	}

    /**
     * Initialization of the middleware modules
     */
	initExpressMiddleWare() {
		this.app.use(bodyParser.urlencoded({extended:true}));
		this.app.use(bodyParser.json());
	}

    /**
     * Initilization of all the controllers
     */
	initControllers() {
		require("./BlockController.js")(this.app);
	}

    /**
     * Starting the REST Api application
     */
	start() {
		let self = this;
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server Listening for port: ${self.app.get("port")}`);
		});
	}

}

new BlockAPI();

/*

    1. The first part is the initialization of Express - initExpress(). In this method, we are setting the port where the server will respond to requests.

    2. The method initExpressMiddleWare() helps you initialize all the middlewares for the framework.

        Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. In this case, we are using body-parser middleware to be able to parse the body data as a JSON or urlencoded.

    3. The method initControllers() allows us to initialize all of the controllers classes. In this case, we have only created one controller. If you have more controllers, you will need to initialized them here.

 */