# Boilerplate Project BabylonJS

#### Description

This boilerplate is essential in his shape, provides just:

* Typescript
* Webpack
* Babylon/core

#### Installation

In the directory you want to put the folder of the project, insert the following command in the terminal

```
git clone https://github.com/SpeederX/boilerplate_project_babylon.git
```

Then just run this inside the folder

```
npm install
```

#### Usage

Running dev

```
npm run start
```

Building release

```
npm run build
```

#### Purpose

The thought was initially to make and environment which allowed to develop right away, without having to configure webpack dev server which is already configured with a basic configuration.

#### Structure

* src - source typescript files and html
* dist - folder which will have the release of the project

Upon building the project you will find an HTML and a bundle.js converted from the source folder, which is everything under src

I didn't setup any extra folder such as assets, images, because in my mind scaffolding should be defined but I might add something over time to include already and have a basic setup or template.
