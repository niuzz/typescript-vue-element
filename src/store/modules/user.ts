import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";
import { getToken, removeToken } from "@/utils/cookies";
import { loginApi } from "@/api/users";
import store from "@/store";

export interface IUserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements IUserState {
  public token = getToken() || "";
  public name = "";
  public avatar = "";
  public introduction = "";
  public roles: string[] = [];
  public email = "";

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles;
  }

  @Action
  public async Login(userInfo: { username: string; password: string }) {
    const res = await loginApi(userInfo);
    console.log(res);

    // if (data) {
    //   this.SET_TOKEN(data.accessToken);
    // }
  }

  @Action
  public async ResetToken() {
    removeToken();
    this.SET_TOKEN("");
    this.SET_ROLES([]);
  }
}

export const UserModule = getModule(User);
