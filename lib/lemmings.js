'use babel';

export default {
  activate(state) {
    require('atom-package-deps').install('lemmings', false);
  },

  deactivate() {
  },
};
