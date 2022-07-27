// does not work, not detected as JSON
// const czrc = require('./.czrc')

/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const czrc = JSON.parse(fs.readFileSync('./.czrc').toString());

const gitmojis = czrc.config.commitizenEmoji.types;
const typeEnum = gitmojis.map((gitmoji) => gitmoji.name);

module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [2, 'always', typeEnum],
  },
};
