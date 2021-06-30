import * as path from 'path';
import * as dotenv from 'dotenv';

import Express from './Express';
import Locals from './Local';
import Log from '../Middleware/Log';

class App {
	// Clear the console
	constructor(){
		console.log("App initialized 1.1");
	}
	public clearConsole (): void {
		// process.stdout.write('\x1B[2J\x1B[0f');
	}

	public loadConfiguration (): void {
		Log.info('Configuration :: Booting @ Master...');
		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	public loadServer (): void {
		Log.info('Server :: Booting @ Master...');
		Express.init();
	}
	public loadDatabase (): void {
		Log.info('Database :: Booting @ Master...');
		// Database.init();
	}


	// Loads the Queue Monitor
	public loadQueue (): void {
	}
}

export default new App;
