import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge
};

export const withoutIcon = () => ({
  template: `<Badge status="warning">B</Badge>`
});
