import { Authenticator } from './../Middleware/Authenticator';
import { IDocument, _document } from '../Interface/IDocument.model';
import { _document as _group } from '../Interface/IGroup.model';
import mongoose from "mongoose";
const schema = mongoose.Schema;
function update(next){
    if (this.isNew) {
        this.updatedBy = Authenticator.id;
        this.createdBy = Authenticator.id;
    } else {
        if(!this.updatedBy)
          this._update.$set = {updatedBy :  Authenticator.id};
        else
          this.updatedBy = Authenticator.id;
    }
    next();
}
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
        group : { //this belong to particular group
            type: schema.Types.ObjectId,
            ref:  _group,
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
definition.pre('save'  , update);
definition.pre('update', update);
definition.pre('delete', update);



// definition.path('files').required(function() { return this.type === 'F'; }, 'Please upload file');

const DocumentSchema = mongoose.model<IDocument>(_document, definition);

export default DocumentSchema;