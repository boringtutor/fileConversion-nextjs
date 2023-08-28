# Contributing

<!-- When contributing to this repository, please first discuss the change you wish to make via [issues](https://github.com/webdevcody/code-racer/issues), [discord](https://discord.gg/4kGbBaa). -->

Please note if you are working on a certain issue then make sure to stay active with development.

## Git Commit, Branch, and PR Naming Conventions

When you are working with git, please be sure to follow the conventions below on your pull requests, branches, and commits:

```text
PR: [#ISSUE ID] Title of the PR
Branch: [ISSUE ID]-title-of-the-pr (shorter)
Commit: [[ISSUE ID]] [ACTION]: what was done
```

Examples:

```text
PR: #2 Add Docker container for Postgres
Branch: 2-add-container-postgres
Commit: [2] feat: add docker container for postgres
```

<!-- ## Installation

To get started with Code Racer locally, follow these steps

1. Make sure you have installed Docker locally (See above Prerequisites)

2. Fork the repo

3. Clone your fork

   ```sh
    git clone https://github.com/<YOUR_GITHUB_ACCOUNT_NAME>/code-racer.git
   ```

4. Navigate to the project directory

   ```sh
   cd code-racer
   ```

5. Create a .env file inside the project's packages/app directory.

6. Copy and paste variables from `packages/app/.env.example` into `packages/app/.env`

7. Install NPM packages

   ```sh
   npm i
   ```

8. Start the database

   ```sh
   npm run dev:db
   ```

9. Start the app dev server

   ```sh
   npm run dev:app
   ```

10. Start the web socket server

```sh
npm run dev:wss
```

Open your browser and visit <http://localhost:3000> to see the application running. -->

## Working on New Features

If you're new to Github and working with open source repositories, I made a video a while back which walks you through the process:
[![How to make a pull request on an open source project](https://img.youtube.com/vi/8A4TsoXJOs8/0.jpg)](https://youtu.be/8A4TsoXJOs8)

There is also a new video explaining how you can contribute to this project:
<br/>
[How to contribute to open source projects (our community project walkthrough)](https://www.youtube.com/watch?v=dLRA1lffWBw)

If you want to work on a new feature, follow these steps.

1. Fork the repo
2. Clone your fork
3. Checkout a new branch
4. Do your work
5. Commit
6. Push your branch to your fork
7. Go into github UI and create a PR from your fork & branch, and merge it into upstream MAIN

## Pulling in changes from upstream

You should pull in the changes that we add in daily, preferably before you checkout a new branch to do new work.

```sh
git checkout main
```

```sh
git pull upstream main
```
