import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'Boosterthon',
  brandUrl: 'http://yahoo.com'
});

addons.setConfig({
  showRoots: true,
  panelPosition: 'bottom',
  theme,
});