import PledgeButton from './PledgeButton.vue'

export default {
  title: 'Buttons/PledgeButton',
  component: PledgeButton,
  parameters: {
    componentSubtitle: 'The Button component is used add click actions',
  },
}

export const Default = () => ({
  components: { PledgeButton },
  template: `<PledgeButton />`,
})
