![Publish Status](https://github.com/ether/ep_rewrite_share_paths/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_rewrite_share_paths/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_rewrite_share_paths/actions/workflows/test-and-release.yml)

Rewrite share path to current URL /p/ to / for non read only and do a str.replace for read only pads -- Useful for people doing reverse proxying, team & pro pads

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_rewrite_share_paths` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_rewrite_share_paths
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
