import { Typegoose } from 'typegoose';
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { BaseSchema } from './Base.schema';
@modelOptions({ schemaOptions: { collection: 'document', timestamps: { createdAt: true, updatedAt: true } } })
export class Document extends BaseSchema<Document>{
    @prop({ required: true })
    name?: string;

    @prop({default:0})
    size?: number;

    @prop({
        enum: ['F', 'D'],
        required: true,
        trim: true,
    })
    type?: String;

    @prop({ ref: () => Document })
    public parent?: Ref<Document>;

}

