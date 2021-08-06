import UserController from "./UserController";
import DocumentController from "./Document.controller";
import UserSpaceController from "./UserSpace.controller";
const register = UserController.register;
const login = UserController.login;
const getProfile = UserController.getProfile;
const updateProfile = UserController.updateProfile;
const createDocument = DocumentController.createDocument;
const createUserSpace = UserSpaceController.createUserSpace;
export default  {
    register,
    login,
    getProfile,
    updateProfile,
    createDocument,
    createUserSpace
}