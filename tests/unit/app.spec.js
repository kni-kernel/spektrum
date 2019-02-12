import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Vue from "vue";

const routerView = {
  name: "router-view",
  render: h => h("div")
};

const routerLink = {
  name: "router-link",
  render: h => h("div")
};

describe("App.vue", () => {
  it("renders HelloWorld", () => {
    Vue.component("router-view", routerView);
    Vue.component("router-link", routerLink);
    const wrapper = shallowMount(App);
    expect(wrapper.find(".hello")).toBeTruthy();
  });
});
