/**
 * Primary file for your  API Server
 *
 * @author abhishek07456.cse <abhishek07456.cse@gmail.com>
 */

import express from 'express';

import Locals from './Local';
import Routes from './Routes';
import ExceptionHandler from '../ErrorHandler/Handler';
import Kernel  from '../Middleware/Kernel';
import DbsAction from './DbsAction';
class Express {
	/**
	 * Create the express object
	 */
	public app: any;

	/**
	 * Initializes the express server
	 */
	public constructor() {
		this.app = express();
		this.mountDB();
		this.mountEnv();
		this.mountCustomMiddleware();
		this.mountRoutes();
	}
	static express(): any {
		throw new Error('Method not implemented.');
	}
    private mountDB() : void{
         DbsAction.init();
	}
	private mountEnv(): void {
		this.app = Locals.init(this.app);
	}

	private mountRoutes(): void {
		this.app = Routes.mountPrivateApi(this.app);
		this.app = Routes.mountPublicApi(this.app);
	}

	private mountCustomMiddleware() : void {
		this.app = Kernel.init(this.app);
	}

	/**
	 * Starts the express server
	 */
	public init(): any {
		const port = this.app.locals.app.port;
		//    this.express = express();

		// Registering Exception / Error Handlers
		// this.express.use(ExceptionHandler.logErrors);
		// this.express.use(ExceptionHandler.clientErrorHandler);
		this.app = ExceptionHandler.errorHandler(this.app);
		this.app = ExceptionHandler.routeNotFound(this.app);

		// this.express = ExceptionHandler.notFoundHandler(this.express);

		// Start the server on the specified port
		this.app.listen(port, (_error: any) => {
			if (_error) {
				return console.log('Error: ', _error);
			}
			return console.log(`Server :: Running @ 'http://localhost:${port}'`);
		});
	}
}
export default new Express;
