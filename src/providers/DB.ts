
import mongoose from 'mongoose';
import Local from './Local';
class DB {
     public static db : any;
     public init() : any{
          const url = Local.config().DbUrl;
          const dbName = Local.config().DbName;
          const options = { useNewUrlParser: true };
          console.log(`${url}/${dbName}`);
          mongoose.connect(`${url}/${dbName}`,options ,(err:any) =>{
              if(err){
                   console.log(`ERROR WHILE CONNECTING TO DB : ${err}`)
              }else{
                   DB.db = mongoose.connection;
                   console.log("connection success");
              }
          })
     }
}

export default DB;