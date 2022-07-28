/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { TYPE_NAMES } = require('commitizen-emoji/dist/constants/types');

const typeEnum = TYPE_NAMES.map(([_code, name]) => name);

module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [2, 'always', typeEnum],
  },
};
