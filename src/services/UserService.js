import Service from "./Service";

export default class UserService extends Service {
  getUsers = async () => {
    return this.http.get();
  };
}
