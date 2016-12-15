# Brain.fm Desktop client

A simple Electron application that provides a desktop client for [Brain.fm](https://brain.fm) that runs in a standalone window and takes advantage of the media buttons to play, pause and skip.

This is a fork of the original work at https://github.com/Dinius/Brain.fm-Desktop-Client with a few of my own customisations, notably it:

- includes the changes in https://github.com/Dinius/Brain.fm-Desktop-Client/pull/2
- now has skip functionality
- uses a smaller window size
- defaults to opening the app page

... along with a few other tweaks to syntax and other things I like 😄.

## Develop

For those new to Electron development, you can build this as follows:

1. Install node.js
2. Clone this repository
3. Change into this directory and run: `npm install`
4. Tinker to your :heart:'s content.
5. Run: `npm start` to see your changes in action.

## Package

When you're ready to package the app, bump the version in `package.json` and run `npm run-script package`.

---

Original README:

# Brain.fm-Desktop-Client
https://brain.fm Desktop client


Simple Electron app as a desktop client for Brain.fm

Runs in a standalone window with keyboard media button control for play/pause.

(Currently just does stop\play, i.e. it can't pause.)
