import Vue from "vue";
import Vuex from "vuex";
import { IAppState } from "./modules/app";

Vue.use(Vuex);

export interface IRootStore {
  appState: IAppState;
}

export default new Vuex.Store<IRootStore>({});
