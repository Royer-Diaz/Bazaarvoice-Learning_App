# Bazaarvoice-learning-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

##Spanish or for BV Office

Installing BV App


Primero instalado Node.js, generalmente se siguen varios pasos para instalarlo pero como estamos usando brew para instalar el ambiente en BV ya el nos puede ayudar a manejar todo el paquete de Node.

brew install node


Luego instalamos Watchman, este programa nos permitirá ver cambios en tiempo real cada ves que salvamos el proyecto sin necesidad que re iniciemos de nuevo el servidor cada ves que salvamos ( si aparece error en la consola y no se arregla reivindicando el server debemos cerrar el Sublime Text o lo que estemos usando así Watchman puede volver a la normalidad).

brew install watchman


Ember CLI (Ember Command Line Interface) es un framework de Ember.js que funciona utilizando la consola de comandos para hacer mas facil la instalacion de componentes y paquetes, tambien se sersiora que tu app este utilizando la ultima version estable.

npm install -g ember-cli

Bower es un manejador de paquetes, le permite al usuario instalar dependencias y librerias desde la consola de comandos.

npm install -g bower



Esta es una herramienta para correr el App en modo test.

npm install -g phantomjs



Clonamos el repositorio donde esta la App en Git Hub

git clone git@github.com:Royer-Diaz/Bazaarvoice-Learning_App.git


Entramos en el App:

cd Bazaarvoice-Learning_App


Instalamos las dependencias:

bower install ember-localstorage-adapter
bower install font-awesome
npm install
bower install

Inicializamos el servidor de Ember!

ember server
