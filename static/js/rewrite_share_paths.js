'use strict';
const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content += eejs.require('ep_rewrite_share_paths/static/js/rewrite.js');
  cb();
};
