import { Component, Vue, Watch } from "vue-property-decorator";
import { DeviceType, AppModule } from "@/store/modules/app";

@Component({
  name: "ResizeMixin",
})
export default class extends Vue {
  get device() {
    return AppModule.device;
  }

  get sidebar() {
    return AppModule.sidebar;
  }

  @Watch("$route", { immediate: true })
  onRouteChange(to: string, from: string) {
    AppModule.ToggleDevice(DeviceType.Mobile);
  }

  beforeMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  private resizeHandler() {
    console.log("resize");
  }
}
