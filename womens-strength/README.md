# TrainingManager
## Kat Gifford - June, 2017

### Landing Page:
![](https://github.com/PiKatso/women-s-strength/blob/master/training-manager/src/assets/images/Screen%20Shot%201.png)

### Admin Page:
![](https://github.com/PiKatso/women-s-strength/blob/master/training-manager/src/assets/images/Screen%20Shot%202.png)

## Planning

1. Configuration/dependencies
* Angular 4
* AngularCLI
* Firebase Database
* Npm
* Bower


2. User stories

* As a user, I'd like to visit a page to see a list of all volunteers
* As a user, I'd like to click a volunteers entry in the list to visit their profile, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the program is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As a user, I'd like to search the list of volunteers by their training

* As an administrator, I want to add new volunteers to the database.
* As an administrator, I want to be able to edit volunteer profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a volunteer, in case they leave the program or are no longer available.


3. Integration
* Initial routes and index page with all dependencies
* Component for viewing: ListVolunteerComponent
* Component for viewing details: VolunteerDetailComponent
* Component for editing: EditVolunteerComponent
* Component for adding: AdminComponent
* Pipe to filter volunteers by : PipeSortTrainedPipe

4. UX/UI
  * Bootstrap

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Typescript](https://www.typescriptlang.org/)
* [Angular 4](https://angularjs.org/)

## Installation

* Run `$ git clone <this-repository-url>`
* Then `$ cd club-tracker`
* Once in the club-tracker folder, run `$ npm install`, `$bower init`(just press enter through the prompts), `$ bower install bootstrap --save`, and `$ bower install`
* You will need to remake the api-keys.ts file. Login to firebase and create your own project here https://firebase.google.com/
* Once logged in, click on 'Go To Console'.
* Then click 'Add project', give it a name, and select your region.
* Next, click 'Add Firebase to your web app'.
* Grab this block of code:
```
var config = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  projectId: "xxxx",
  storageBucket: "",
  messagingSenderId: "xxxx"
};
```
  * Create an `api-keys.ts` file inside the app directory and copy the block of code into it.
  * Replace `var config` with `export var masterFirebaseConfig`
  * To finish setting firebase up, go to firebase and and go into the database tab.
  * Click on the button made of three dots.
  * Select the Import JSON option.
  * Select browse, navigate to the project folder, and open the `sample-members.json` file.
  * Select Import and your database should be complete!

## Running / Development

Now that everything you need should be installed and setup, we can run it with angular.

* Run `$ ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## License

MIT License

Copyright (c) Kat Gifford, 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.
