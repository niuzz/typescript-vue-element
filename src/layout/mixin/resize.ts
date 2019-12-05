import { Component, Vue, Watch } from "vue-property-decorator";
import { DeviceType, AppModule } from "@/store/modules/app";

@Component({
  name: "ResizeMixin",
})
export default class extends Vue {
  get device() {
    return "mobile";
  }

  get sidebar() {
    return [];
  }

  @Watch("$route", { immediate: true })
  onRouteChange(to: string, from: string) {
    AppModule.ToggleDevice(DeviceType.Mobile);
    console.log(to, from);
  }

  beforeMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  private resizeHandler() {
    console.log("resize");
  }
}
