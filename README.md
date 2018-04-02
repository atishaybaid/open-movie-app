## Yarn

We use yarn because it is determisting just as npm shrink wrap,i.e in whatever machine you run code
it runs exactly the same way.

#### Angular(or so called mvc) vs React

Orignally mvc was designed for server which was working wonderfully.
Then people decided to use this flow on clint side,they created modals views controller seperated.

But this was not ideal for clint side so people at facebook desided to use some concepts of encaputations
and created component based liberary.
This proved to be a wonderfull idea,becuse it is easer to maintain as everything is encpsulated insied components,easier to
reuse.But it comes with a cost of writting more code.

##### Eslint

Prettier only handles stylistic things,i.e spaces and indentation.

We will be using arbnb config

Tooling
Prettier:A great Formating tool

#### Webpack at the core its just a packager.

Read the concepts at [https://webpack.js.org/concepts/]

four key concepts

##### Entry-> It specifies which module to start bundeling from,and then looking at entry it recorsevely builds the

dependency graph,every dependency is then processed and outputted to files called bundles.

#### Output ->The place where webpack emits bundles.

#### Loaders ->Webpack at its core only understand javascript,to make it understand other types of files loades are used.

#### Plugins ->They are used to perfom various tasks,like minification,unglification etc.

To use it we need to import them on the top,and then provide a plugin array,they use apply function and can be used as
new ........

##### Babel->it is a transpiler,converts es6 to es5.

contents of .babelrc

presets->In babel each kind of transpilation is done by plugin,suchas to convert arrow function to noramal function we need
a plugin,hence to achive everything we need many plugins. A preset is a collection of plugin.

#### ReactState

1)React Batches the state together if we do setState simultanoiusly,however providing a function in setstate does the job and
this pattern should also be used for form updation[file:///Users/atishaybaid/work/open-movie-app/index.html]

2)Never assign props to state e.g
this.state = {
color: props.initialColor
};

because this will not change when the props of parent is changing,insteed take the state-up.

#### Fragments->It is usefull when we want to render multiple things from render,prior to version 16.20,if we have to achive same

thing then we would have to wrap elements in some parent div
