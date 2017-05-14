'use babel';

export default {
  activate(state) {
    require('atom-package-deps').install('lemmings-atom', false);
  },

  deactivate() {
  },
};
