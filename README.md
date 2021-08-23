# kata-react

practice kata for react.js

## Structure

Each kata exercise goes into its own self contained sub-folder.
Exercises are numbered icrementally in the order that they are attempted.

## Tooling

### Install Required

* visual studio code 1.57.1 <https://code.visualstudio.com/download>
* node 16.3.0 <https://nodejs.org/en/download/current/>
* npm 7.18.1 `npm install -g npm`

### Automatically included

* npx create-react-app
* yarn 1.22.10
* npx generate-react-cli

## Exercises

### 01-hello_world

Trying out the toolchain to create a basic react hello world.
Created with `npx create-react-app 01-hello_world`

### 02-list

Create a component that iterates through a list of strings and displays them as an unsorted list
Added a new component with `npx generate-react-cli component EaserEgg`

### 03-add_remove

Create a to-do list which can be added to or removed from.
There should be a form with a title, detail and add button, then a list of to-do elements that shows the title and a remove button.
Clicking on the title should open up a modal that shows the title and detail, has a remove button, and is closed by clicking on an x in the corner or clicking outside of the modal.
