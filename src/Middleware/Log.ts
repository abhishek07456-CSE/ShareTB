/**
 * Creates & maintains the log
 */

import * as fs from 'fs';
import * as path from 'path';

class Log {
	public baseDir: string;
	public fileName: string;
	public linePrefix: string;

	public today: Date = new Date();

	constructor() {
		let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
		let _timeString = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;

		this.baseDir = path.join(__dirname, '../../.logs/');

		this.fileName = `${_dateString}.log`;
		this.linePrefix = `[${_dateString} ${_timeString}]`;
	}
    
	public info (_string: string): any {
		return this.addLog('INFO', _string);
	}
	public all (_string: string): any {
		return this.addLog('ALL', _string);
	}
	public debug (_string: string): any {
		return this.addLog('DEBUG', _string);
	}

	public warn (_string: string): any {
		return this.addLog('WARN', _string);
	}

	public error (_string: string): any {
		return this.addLog('ERROR', _string);
	}

	public custom (_filename: string, _string: string): any {
		return this.addLog(_filename, _string);
	}

	private addLog (_kind: string, _string: string): any {
		if(process.env.LOG_LEVEL != _string) return false;
		const _that = this;
		_kind = _kind.toUpperCase();

		fs.open(`${_that.baseDir}${_that.fileName}`, 'a', (_err, _fileDescriptor) => {
			if (!_err && _fileDescriptor) {
				// Append to file and close it
				fs.appendFile(_fileDescriptor, `${_that.linePrefix} [${_kind}] ${_string}\n`, (_err) => {
					if (! _err) {
						fs.close(_fileDescriptor, (_err) => {
							if (! _err) {
								return true;
							} else {
								return console.log('\x1b[31m%s\x1b[0m', 'Error closing log file that was being appended');
							}
						});
					} else {
						return console.log('\x1b[31m%s\x1b[0m', 'Error appending to the log file');
					}
				});
			} else {
				return console.log('\x1b[31m%s\x1b[0m', 'Error cloudn\'t open the log file for appending');
			}
		});
	}

	public clean (): void {
	}
}

export default new Log;
