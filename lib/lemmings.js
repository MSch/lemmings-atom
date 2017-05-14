'use babel';

export default {
  activate(state) {
    require('atom-package-deps').install('lemmings', false);
    atom.config.set('autosave.enabled', true);
  },

  deactivate() {
  },
};
