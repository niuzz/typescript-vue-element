import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";
import { getToken, removeToken, setToken } from "@/utils/cookies";
import { loginApi, getUserInfo } from "@/api/users";
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

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar;
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction;
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email;
  }

  @Action
  public async Login(userInfo: { username: string; password: string }) {
    const { data } = await loginApi(userInfo);
    setToken(data.accessToken);
    this.SET_TOKEN(data.accessToken);
  }

  @Action
  public async ResetToken() {
    removeToken();
    this.SET_TOKEN("");
    this.SET_ROLES([]);
  }

  @Action
  public async GetUserInfo() {
    if (this.token === "") {
      throw Error("token is undefined!");
    }
    const { data } = await getUserInfo({});
    if (!data) {
      throw Error("Verification failed, please login again");
    }
    const { roles, name, avatar, introduction, email } = data;
    if (!roles || roles.length <= 0) {
      throw Error("roles must be a non-null array");
    }
    this.SET_ROLES(roles);
    this.SET_NAME(name);
    this.SET_AVATAR(avatar);
    this.SET_INTRODUCTION(introduction);
    this.SET_EMAIL(email);
  }
}

export const UserModule = getModule(User);
