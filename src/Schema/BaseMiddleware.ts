export const beforeSaveHook = (doc) => {
    if (doc.isNew) {
        doc.created_at = new Date();
    } else {
        doc.modified_at = new Date();
    }
}