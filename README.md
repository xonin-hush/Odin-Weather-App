# [Weather App](https://weather.xonin.dev)

fifth project in "the odin project" JavaScript Course, it demonstrates Promises, async await as of other stuff. [The Odin Project-JavaScript](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).

## Links

[Visit website](https://weather.xonin.dev)

## Features

- Ability to Fetch data from weatherAPI
- Ability to change Temperature units
- Ability to handle errors

## Things I got a better understanding of

- Promises
- How to make Headers
- Use of await and how code executes when using async functions
- Using event.preventDefault(); to stop page from refreshing after clicking a button, thx to https://stackoverflow.com/questions/41249199/unexpected-web-page-refresh-in-chrome-browser
- Deploying projects that use webpack using netlify (which you can find below)

## Fine font-family

- https://fonts.google.com/selection/embed

## How to I managed to deploy this project

### Step 1

add dist & src files and commit them to github

```sh
git add dist
git add src
git commit -m "Initial dist & src subtree commit"
```

### Step 2

create gh-pages then push dist to it

```sh
git subtree push --prefix dist origin gh-pages
```

### Step 3

checkout to new branch then share src file with it

```sh
git checkout gh-pages
git checkout main src/
```

### Step 4

add and commit your changes

```sh
git add src
git commit -m "Add src to branch"
git push
git checkout main
```

### Step 5

then just go to netlify and deploy your project using on the new branch

#### Sources

- https://gist.github.com/cobyism/4730490
- https://www.30secondsofcode.org/git/s/copy-file-from-branch

## Technologies used

![HTML5](https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=FFF)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Credits

This project was made by [Xonin](https://github.com/xonin-hush) for The Odin Project.
