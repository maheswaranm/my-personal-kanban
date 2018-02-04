My Personal Kanban
==========================

A very simple Offline Personal Kanban board.

# [Try It Out here](http://my-personal-kanban.surge.sh/)

[Get latest release zip from this repo.](https://api.github.com/repos/maheswaranm/my-personal-kanban/zipball)

This repo includes my ideas on top of the wonderful project by [Greg Gigon](https://github.com/greggigon).
Greg's original version is available [here](https://github.com/greggigon/my-personal-kanban).

## How to use it?

* Download the [zip file](https://api.github.com/repos/maheswaranm/my-personal-kanban/zipball)
* Unzip at your preferred location
* Open `index.html` in your browser
* Kanban away!

## Build your own from source

1. Pre-requisites
    - [npm](https://www.npmjs.com/get-npm)
    - [bower](https://bower.io/#install-bower)
2. Clone the repository
    ``` 
    git clone https://github.com/maheswaranm/my-personal-kanban.git
    ```
3. Install the dev, build and test dependencies from the package.json 
    ```
    npm install
    ```
    
4. Install all the app components from the bower.json
    ```
    bower install
    ```
5. Make changes to the code in `app` folder
6. Update tests in the `test` folder
7. When its time to build and distribute
    ```
    grunt build
    ```
    This will create a new zip file in your folder with the distributable version.  
    JS and CSS are minified.  
    The version number for the zip file is taken from the `bower.json` file