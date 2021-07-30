import { IDocument, _document } from '../Interface/IDocument.model';
import mongoose from "mongoose";
import validator from 'validator';
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
            required: true,
            min: 0,
        },
        type: {
            type: schema.Types.String,
            enum: ['F', 'D'],
        },
        parent: {
            type: schema.Types.ObjectId,
        },
        children: [schema.Types.ObjectId],
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
);
const DocumentSchema = mongoose.model<IDocument>(_document, definition);

export default DocumentSchema;