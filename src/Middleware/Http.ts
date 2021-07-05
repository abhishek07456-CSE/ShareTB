import { Application } from 'express';
import * as compress from 'compression';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as expressValidator from 'express-validator';

import Log from './Log';
import Locals from '../providers/Local';


class Http {
	public static mount(app: Application): Application {
		app.use(bodyParser.json({
			limit: Locals.config().maxUploadLimit
		}));

		app.use(bodyParser.urlencoded({
			limit: Locals.config().maxUploadLimit
		}));

		// Disable the x-powered-by header in response
		app.disable('x-powered-by');

		// Enables the request payload validator
		// app.use(expressValidator());

		// Enables the request flash messages
		// app.use(flash());

		/**
		 * Enables the session store
		 *
		 * Note: You can also add redis-store
		 * into the options object.
		 */
		// const options = {
		// 	resave: true,
		// 	saveUninitialized: true,
		// 	secret: Locals.config().appSecret,
		// 	cookie: {
		// 		maxAge: 1209600000 // two weeks (in ms)
		// 	},
		// 	store: new MongoStore({
		// 		url: process.env.MONGOOSE_URL,
		// 		autoReconnect: true
		// 	})
		// };

		// app.use(session(options));

		// Enables the CORS
		// app.use(cors());

		// Enables the "gzip" / "deflate" compression for response
		// app.use(compress());

		return app;
	}
}

export default Http;
