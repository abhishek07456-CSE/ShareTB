import UserController from "./UserController";
import DocumentController from "./Document.controller";
const register = UserController.register;
const login = UserController.login;
const getProfile = UserController.getProfile;
const updateProfile = UserController.updateProfile;
const createDocument = DocumentController.createDocument;
export default  {
    register,
    login,
    getProfile,
    updateProfile,
    createDocument
}