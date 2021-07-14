
import mongoose from 'mongoose';
import Local from './Local';
class DB {
     private static db: any;
     public init(): any {
          const url = Local.config().DbUrl;
          const dbName = Local.config().DbName;
          const options = { useNewUrlParser: true, seUnifiedTopology: true };
          console.log(`${url}/${dbName}`);
          mongoose.connect(`${url}/${dbName}`, options, (err: any) => {
               if (err) {
                    console.log(`ERROR WHILE CONNECTING TO DB : ${err}`)
               } else {
                    DB.db = mongoose.connection.db;
                    // DB.db.collection("sharetube1").insertOne({id:"1610991031",name:"abhishek"},(err,result)=>{
                    //            if(err)
                    //            console.log(err);
                    //            else
                    //            console.log(result);
                    // });
                    console.log("connection success");
               }
          })
     }
     public static getConnection() : any{
        return DB.db;
     }
}

export default DB;