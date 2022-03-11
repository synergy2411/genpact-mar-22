# Break Time
> Tea break  -> 11:30AM - 11:50AM (20 minutes)
> Lunch Break  -> 01:00PM - 02:00PM (60 minutes) 
> Post lunch  -> 03:30PM - 03:50PM (20 minutes)


# What is JavaScript ?
- Single Thread
- Asynchronous / Non-blocking
- Scripting Language
- Interactive & Dynamic
- Runs on Client side as well as on Server
- Helps to load the content dynamically on web page
- All time consuming task to be done in Asynchronous manner
- Mutli-threaded environment


MEAN Stack | MERN Stack (JavaScript)
M - MongoDB : store data in JSON format
E - Express : Web App Framework for NodeJS Platform; JavaSCript Code
A / R - Angular / React : Client Side JavaScript Framework / Library
N - Node : Platform to execute JavaScropt code on Server

 - Browser Environment
 - Server Environment - NodeJS Platform


 # REPL Mode - Read Evaluate Print Loop



 ECMAScript5 - older specifications
 2015 -> new Specifications - ECMASscript6 / ES2015
 - Arrow functions
 - Destructuring
 - Rest / Spread Operators
 - Template literals
 - Block scoping
 - Promise API
 - Classes
 - Module System
 - Map/Set


 # Built-in Array Functions
 - map
 - forEach
 - filter
 - find
 - findIndex
 - some : boolean value; if one of the element meet the criteria
 - every : boolean value; if all the element meet the criteria


 # JavaScript DataTypes
 - Primitive : Number, String, Boolean
 - Reference : Date, Object, Array, Function

 # JavaScript Engine
 - Creational Phase : all avriable takes place into memory and JS engine assigns them value "undefined"
 - Executional Phase : refers all variable present in memory;

 # const != immutable


 # Why TypeScript ?
 - Type Definition
 - Extended version of JS
 - Object oriented
 - ES6 / ES2015+ features
 - Angular itself programmed in TS

 # Type System in Typescript
 - any
 - unknown
 - enum
 - null
 - void
 - classes
 - tuple
 - Custom Type -> 'type' keyword | 'interface' - Structural type



 # to install typescript
 > npm i typescript -g
 > tsc <filename>
 > tsc --version

 # Compilation Context - to generate tsconfig.json
 > npx tsc --init
 > tsc --watch

# Decorators / Annotations -> Used for Meta-programming
- Simple Function with pre-defined logic
- Pre-fixed with '@'
- Types of Decorators
     : Class Level
     : Property Level
     : Method Level
     : Parameter Level



# Angular Building blocks-
- Component : ES6 Class with @Component({})
- Directive : ES6 Class with @Directive({})
- Pipe : ES6 Class with @Pipe({})
- Service : ES6 Class with @Injectable({})
- Module : ES6 Class with @NgModule({})




# What is Angular ?
- Open Source
- JavaScript framework
- Front-end App
- Single Page App
- Web Apps
- Written in Typescript
- Works on MVC pattern


# JavaScript Libraries / Framework
- React : render UI quickly, SPA => react-router-dom, State => Redux, Form Validation => Formik
- JQuery : DOM Maipulation, AJAX Calls
- KnockoutJS : Two-way data-binding, MVVM Pattern
- Bootstrap : Make responsive websites
- Vue : Template oriented UI
- BackboneJS : MVC Pattern at client side
- Stencil : Creating custom components
- Polymer : Creating custom web components
- AngularJS (v1) Library (2011): MVC, Two-way data-binding, SPA = angular-router
- *Ember (2011): Templates, Two-way data-binding, MVC Pattern, State Management, SPA, Remote Server Call etc
- *Angular (Oct 2014) : Templates, Two-way data-binding, MVC Pattern, State Management, SPA, Remote Server Call, DOM Manipulation, AoT Compiler, Ivy Renderer, Google Sponsured Team, Huge Community Support, Create own tags, Component based architecture, Shadow DOM etc

- NodeJS : Platform
- ExpressJS / Koa / Hapi / Sails / Kraken : Server Side Framework


# to install Angular CLI
- npm i @angular/cli@12 -g
- ng --version

# to Create Angular Project
- ng new <project-name>
    : ng new my-app
- cd my-app
- ng serve || npm run start

# to add bootstrap
- npm i bootstrap@4


# Nested Component Communication
# Life cycle Methods
# Directives : 
    - Structural
    - Attribute
# Pipes 



# CLI Commands
- ng generate component /path/comp-name || ng g c comp-name
- ng g c components/expenses/expense
- ng generate directive /path/directive-name || ng g d directive-name
- ng g p pipe-name
- ng g m module-name
- ng g s service-name

# Component Types
- Smart | Container | Parent --> Expenses Component --> Component level business logic
- Dump | Presentational | Child --> Expense Component --> Creating the UI


# DOM - Document Object Model : hierarchical structure of HTML elements

html
    head
        title
        meta
        script
        link
    body
        div
        header  
        nav
            ul
                li
                    a


# Pipe Types
- Pure : default; will run on pure changes
- Impure : will run on pure as well as impure changes

let user = {
    name : "Foo
}

// Impure Change
user.name = "Bar"           // option 1 - not changing the reference

// Pure Change
user = {                    // option 2 - changing the reference
    name : "Bam"
}


let fruits = ["apple","banana"]

// Impure Change
fruits.push("kiwi")                         // option 1

// Pure Change
fruits = ["apple", "banana", "kiwi"]        // option 2


# Forms
    - Template driven
    - Model Driven / Reactive Forms
# Services - keep the app business logic
# Observables
# Remote Server call / HTTP Call



# Angular Form - Form and Form Controls - States / Classes
- ngValid | ngInvalid
- ngPristine | ngDirty
- ngTouched | ngUntouched


# Remote Server Call - HttpClientModule -> GET POST PUTCH DELETE

# to install JSON SERVER
- npm i json-server -g
- create db.json file
- paste expenses data in json file
- run the json server
 > json-server db.json --watch


# Observable : is a stream on which data flows at different time interval
- are cold
- emits series of event
- can pipe various operators
- error handling
- are cancelable











# Single Page App
# Modules
# Deployment