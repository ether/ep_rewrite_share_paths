exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content += require('ep_etherpad-lite/node/eejs/').require('ep_rewrite_share_paths/static/js/rewrite.js');
};
