import * as mongoose from "mongoose";
import { IRead } from "../Interface/IRead";
import { IWrite } from "../Interface/Iwrite";
export class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;
    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }


    // create(item: T, callback: (error: any, result: T) => void) {
    //     this._model.create(item, callback);
    // }

    create(item: T) {
        return new Promise((resolve, reject) => {
            this._model.create(item, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            })
        });
    }
    retrieve(callback: (error: any, result: T) => void) {
        this._model.find({}, callback);
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback?: (error: any, result: any) => void) {
        return new Promise((resolve, reject) => {
            this._model.update({ _id: _id }, item, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            })
        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    findById(_id: string, callback?: (error: any, result: T) => void) {
        return new Promise((resolve, reject) => {
            this._model.findById(_id, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            })
        });
    }

    findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T> {
        return this._model.findOne(cond, callback);
    }

    find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]> {
        return this._model.find(cond, options, callback);
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}