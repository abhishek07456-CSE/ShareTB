import { Application } from 'express';

import Http from './Http';
import Views from './Views';
import Statics from './Statics';
import StatusMonitor from './StatusMonitor';
class Kernel {
	public static init (app: Application): Application {
		app = Http.mount(app);
		app = Views.mount(app);
		// Mount statics middleware
		app = Statics.mount(app);
		// Mount status monitor middleware
		app = StatusMonitor.mount(app);

		return app;
	}
}

export default Kernel;
