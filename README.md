# Tachyons React App [WIP]

This extends create-react-app to include Tachyons implemented with emotion +
styled-system. If you're familiar with Tachyons and are interested in
css-in-js, this is hopefully a helpful project. Can be used for anything you'd
use create-react-app for. While Tachyons is light-weight by default, using css-in-js will
result in increased css performance as you don't send unused styles down the wire. 

## Getting going

Clone the directory and cd into the root of the directory
```
git clone git@github.com:tachyons-css/tachyons-styled-react.git newProject && cd newProject
```

Install dependencies
```
yarn 
```

Start the dev environment
```
yarn start
```

This should start a development environment on ```localhost:3000```


## Elements 
```
src/elements/
```
This folder contains html elements wired up to styled system. Scales 
are defined and configurable in ```src/theme.js```

Elements is meant to be customizable. By default they aren't very opinionated - but 
you could set your base reset / normalize styles here and make them as opinionated as you want. 

Elements can be composed together just like regular html elements to make more
complex components. 

One downside in this current setup is you need to manually import elements you want to style. 
Someone better at js than myself could set this up so that everything in
elements is automatically imported for use within ```src/components``` &
```src/pages```.

## Pages

Add new pages / routes in src/App.js

## Reference 

- (https://styled-system.com)
- [https://emotion.sh]
- [https://github.com/facebook/create-react-app]
