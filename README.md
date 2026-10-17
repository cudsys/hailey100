# hailey 100

First to 100 points wins. This folder is the whole game, ready for GitHub Pages.

## Put it online

1. Make a new repository on GitHub (for example `hailey100`).
2. Upload everything in this folder to the root of the repository, including the hidden `.nojekyll` file.
   (Easiest: on the repo page choose **Add file > Upload files** and drag the files in, or use `git push`.)
3. Go to **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   pick your branch (`main`) and the `/ (root)` folder, then **Save**.
4. After a minute the game is live at `https://<your-username>.github.io/<repo-name>/`.
   If the repo is named `<your-username>.github.io`, it's at `https://<your-username>.github.io/` instead.

## Good to know

- All paths are relative, so it works at the site root or under a repo subpath.
- It installs as an app (Add to Home Screen / Install) and works offline after the first visit.
- Online rooms use the free PeerJS connection server over https, so nothing else needs setting up.
- Your cards, packs and saves live in your browser on that address. Moving to a new address starts fresh;
  use **Export** in the game first if you want to carry them over.
- To update, replace the files and push. The game checks the network first, so the new version shows up on the next online visit.
