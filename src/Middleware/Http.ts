import { Application } from 'express';
import compress from 'compression';
import * as bodyParser from 'body-parser';
import formData from "express-form-data";
import os from 'os';
import Log from './Log';
import Locals from '../providers/Local';


class Http {
	public static mount(app: Application): Application {
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded());
		app.use(bodyParser.urlencoded({ extended: true }));
		const options = {
			uploadDir: os.tmpdir(),
			autoClean: true
		};

		app.use(formData.parse(options));
		app.use(formData.format());
		app.use(formData.stream());
		app.use(formData.union());
		app.disable('x-powered-by');
		app.use(compress());

		return app;
	}
}

export default Http;
