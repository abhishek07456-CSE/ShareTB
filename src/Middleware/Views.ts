import * as path from 'path';
import { Application } from 'express';

import Log from './Log';

class Views {
	public static mount(app: Application): Application {
		app.set('view engine', 'pug');
		app.set('view options', { pretty: true });
		app.set('views', path.join(__dirname, '../../views'));
		app.locals.pretty = true;

		return app;
	}
}

export default Views;
