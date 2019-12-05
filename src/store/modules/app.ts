import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements IAppState {
  public device = DeviceType.Desktop;
  public sidebar = {
    opened: false,
    withoutAnimation: false,
  };

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device;
  }

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device);
  }
}

export const AppModule = getModule(App);
