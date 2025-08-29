import conf from "../conf.js";

import { Client, Account, ID } from "appwrite";

// export const client = new Client();

// client
//   .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
//   .setProject("<PROJECT_ID>"); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return;
      }
    } catch (error) {
      console.log("Create Account Error", error);
    }
  }
  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("login error", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("current user isloggedIn: ", error);
    }
    return null;
  }
  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("logout error: ", error);
    }
  }
}

const authService = new AuthService();
export default authService;
