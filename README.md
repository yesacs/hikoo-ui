# Hikoo UI
A WIP for a static asset version of the hikoo.us UI. With node installed, check
it out and run ``` npm start ```


### Other commands

#### npm run lint
Uses eslint to lint the js/jsx files in the project. An .eslintrc is included
in the project

#### npm run watch
Will watch both app.scss and js/jsx files in the src directory and create the
built versions in the dist directory. Individually you can run either just the scss
or js/jsx via ``` npm run watch-css ``` or ``` npm run watch-js ```

#### npm run server
Starts up a simple web server using beefy using the included index.html file.
If you use this, you don't have to use ``` npm run watch ``` as the server
command will spawn its own watchers.

#### npm run build
A short cut to make the minified browserify js build and css build for
production.
