import { Authenticator } from './../Middleware/Authenticator';

export const beforeSaveHook = (doc) => {
    if (doc.isNew) {
        doc.created_at = new Date();
    } else {
        doc.modified_at = new Date();
    }
}
export function ActionUserUpdate(next) {
    if (this.isNew) {
        this.updatedBy = Authenticator.id;
        this.createdBy = Authenticator.id;
    } else {
        if (!this.updatedBy)
            this._update.$set = { updatedBy: Authenticator.id };
        else
            this.updatedBy = Authenticator.id;
    }
    next();
}