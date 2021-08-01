import { Authenticator } from './../Middleware/Authenticator';
import { IDocument, _document } from '../Interface/IDocument.model';
import mongoose from "mongoose";
const schema = mongoose.Schema;
let definition: any = new schema<IDocument>(
    {
        name: {
            type: schema.Types.String,
            required: true,
            trim: true,
        },
        size: {
            type: schema.Types.Number,
            min: 0,
            default: 0,
        },
        type: {
            type: schema.Types.String,
            enum: ['F','D'],
            required: true,
            trim: true,
        },
        file: {
              data: Buffer,
              type:schema.Types.Mixed,
              required:function(){
                  return this.type == 'F';
              }
        },
        parent: {
            type: schema.Types.ObjectId,
            default: null
        },
        children: [schema.Types.ObjectId],
        created_by: {
            type: schema.Types.ObjectId,
        },
        updated_by: {
            type: schema.Types.ObjectId,
        }
        /*
        permission:{
            friends : [object_id] [r-w-x]
            group : [object_id] [r-w-x]
            me : [object_id] [r-w-x]
        }
        */
    },
    {
        timestamps: true
    }
).pre<IDocument>('save', function (next) {
    if (this.isNew) {
      this.updated_by = Authenticator.id;
      this.created_by = Authenticator.id;
    } else {
      this.updated_by = Authenticator.id
    }
    next();
});
// definition.path('files').required(function() { return this.type === 'F'; }, 'Please upload file');

const DocumentSchema = mongoose.model<IDocument>(_document, definition);

export default DocumentSchema;