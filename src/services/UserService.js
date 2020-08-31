import Service from "./Service";

export default class UserService extends Service {
  isAuth = async () => {
    return this.fb.auth().currentUser() == null;
  };

  create = async (email, password) => {
  };                                


}
