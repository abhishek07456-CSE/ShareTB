import "reflect-metadata";
import mongoose from 'mongoose';
import Local from './Local';
import { createConnection, Db } from "typeorm";
abstract class DB {
     public static db: any;
     static init(): any {
          const url = Local.config().DbUrl;
          const dbName = Local.config().DbName;
          const options = { useNewUrlParser: true, seUnifiedTopology: true };
          console.log(`${url}/${dbName}`);
          mongoose.connect(`${url}/${dbName}`, {}, (err: any) => {
               if (err) {
                    console.log(`ERROR WHILE CONNECTING TO DB : ${err}`)
               } else {
                    DB.db = mongoose.connection.db;
                    console.log("connection success");
               }
          })
     }
     static connect = () => {
          createConnection().then(async connection => {
            DB.db  = connection;
            console.log("connection success");
          }).catch(error => console.log(error));
     }
     static getConnection(): any {
          return DB.db;
     }
}

export default DB;