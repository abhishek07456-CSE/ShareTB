import { Application } from 'express';
import expressStatusMonitor   from 'express-status-monitor';

import Log from './Log';
import Locals from '../providers/Local';

class StatusMonitor {
	public mount (app: Application): Application {
		const api: string = Locals.config().apiPrefix;

		// Define your status monitor config
		const monitorOptions: object = {
			title: Locals.config().name,
			path: '/status-monitor',
			spans: [
				{
					interval: 1,
					retention: 60
				},
				{
					interval: 5,
					retention: 60
				},
				{
					interval: 15,
					retention: 60
				}
			],
			chartVisibility: {
				mem: true,
				rps: true,
				cpu: true,
				load: true,
				statusCodes: true,
				responseTime: true
			},
			healthChecks: [
				{
					protocol: 'http',
					host: 'localhost',
					path: '/',
					port: '4040'
				},
				{
					protocol: 'http',
					host: 'localhost',
					path: `/${api}`,
					port: '4040'
				}
			]
		};

		// Loads the express status monitor middleware
		app.use(expressStatusMonitor(monitorOptions));

		return app;
	}
}

export default new StatusMonitor;
