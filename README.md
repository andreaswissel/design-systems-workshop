# Design Systems Workshop

Your trainer: [Andreas Wissel](https://twitter.com/andreas_wissel), Freelance Consultant

## Step 1: Devices and Software
Please bring your development devices and install the following software. 
[Already done? Click here for Step 2.](#step-2-demo-repository)

### Devices
Laptop with the latest Windows/macOS/Linux version
Ensure that you can access the internet without proxies and install software without group policies, etc.

In case of doubt, use your private notebook.

### Browser (Desktop)
Microsoft Edge, or a Chromium-equivalent @ latest version


### Development Tools
- [Git](https://gitkraken.com/)
  - Optional: Git UI-Tool like GitKraken, TortoiseGit, Tower, SourceTree, ...
- [Node.js](https://nodejs.org/en/), latest LTS version
- [Node version manager](https://github.com/nvm-sh/nvm)
- Editor of choice
  - [WebStorm](https://www.jetbrains.com/webstorm/)
  - [Visual Studio Code](https://code.visualstudio.com/)

### Design Tools
Create a free account at [Figma](https://figma.com)

## Step 2: Demo Repository

Please execute the following in your preferred terminal:

```sh
nvm use
npm uninstall -g @angular/cli @storybook/cli
npm cache verify
npm install -g @angular/cli@latest
```

Next, navigate to a folder of your choice and execute:

```sh
git clone https://github.com/andreaswissel/design-systems-workshop
cd design-systems-workshop
```

If you prefer SSH, you can use this checkout URL: `git@github.com:andreaswissel/design-systems-workshop.git`
