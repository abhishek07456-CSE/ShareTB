import UserController from "./UserController"
const register = UserController.register;
const login = UserController.login;
const getProfile = UserController.getProfile;
export default  {
    register,
    login,
    getProfile
}