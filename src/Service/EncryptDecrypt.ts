var bcrypt = require('bcrypt');
var saltRounds = 10;

//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
//Text is the Confidential data which we need to encrypt using 'password'(Key).
const encrypt = (text) : string => {
    return bcrypt.hashSync(text, saltRounds);
}
const compareHash = (text , hash) : boolean => {
    return bcrypt.compareSync(text, hash);
}
export {
    encrypt,
    compareHash
}
