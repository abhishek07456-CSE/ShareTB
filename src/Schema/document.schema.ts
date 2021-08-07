import { IDocument, _document } from '../Interface/IDocument.model';
import { _document as _space } from '../Interface/IUserSpace.model';
import { ActionUserUpdate } from './BaseMiddleware';
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
            enum: ['F', 'D'],
            required: true,
            trim: true,
        },
        file: {
            data: Buffer,
            type: schema.Types.Mixed,
            required: function () {
                return this.type == 'F';
            }
        },
        //to-do check space id exists or not
        space : { //this belong to particular group
            type: schema.Types.ObjectId,
            ref:  _space,
            required:true,
        },
        parent: {
            type: schema.Types.ObjectId,
            ref: _document,
            default: null
        },
        children: {
            type: [schema.Types.ObjectId],
            ref: _document,
            default: []
        },
        createdBy: {
            type: schema.Types.ObjectId,
        },
        updatedBy: {
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
)
definition.pre('save'  , ActionUserUpdate);
definition.pre('update', ActionUserUpdate);
definition.pre('delete', ActionUserUpdate);



// definition.path('files').required(function() { return this.type === 'F'; }, 'Please upload file');

const DocumentSchema = mongoose.model<IDocument>(_document, definition);

export default DocumentSchema;