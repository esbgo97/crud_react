import axios from "axios";
import Firebase from "../plugins/firebase";

export default class Service {
  constructor() {
    this.http = axios.create();
    this.fb = Firebase
  }
}
