import UserController from "./UserController"
const register = UserController.register;
const login = UserController.login;
const getProfile = UserController.getProfile;
const updateProfile = UserController.updateProfile;
export default  {
    register,
    login,
    getProfile,
    updateProfile
}