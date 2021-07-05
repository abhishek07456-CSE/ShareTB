import * as path from 'path';
import * as express from 'express';

class Statics {
	public static mount(_express: express.Application): express.Application {
		const options = { maxAge: 31557600000 };
		_express.use('/public', express.static(path.join(__dirname, '../../public'), options));
		_express.use('/vendor', express.static(path.join(__dirname, '../../node_modules'), options));
		return _express;
	}
}

export default Statics;
