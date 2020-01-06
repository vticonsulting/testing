import HelloWorld from "./HelloWorld.vue";

export default {
  title: "HelloWorld",
  component: HelloWorld
};

export const basic = () => ({
  template: `<HelloWorld msg="HelloWorld Basic" />`
});
