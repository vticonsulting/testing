import data from '../../public/api/data.json'

export default {
  title: 'Data',
}

export const user = () => ({
  template: `
    <div class="text-xs">
      <pre>{{ user }}</pre>
    </div>
  `,
  props: {
    user: {
      default: data.users[0],
    },
  },
})
