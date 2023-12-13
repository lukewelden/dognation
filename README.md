# Dognation 
This repo has been created to demonstrate and document the challenge project associated with the *Password Authentication* lesson of the *User Authentication and Authorization* module which is part of Codecademy's [Backend Engineer Carreer Path](https://www.codecademy.com/learn/paths/back-end-engineer-career-path). 

This challenge project displays knowledge of the following tools/technology
- Password hashing 
- Session authenticaion 
- [express sessions](https://www.npmjs.com/package/express-session)
- [Passport.js](https://www.passportjs.org/) 
- [bycrypt](https://www.npmjs.com/package/bcrypt)


## Intro 
Welcome to Dognation!

Dognation is collaborative site for dogwalkers to share pictures of their buddies. People can sign in and post pictures of the dogs they walk and share them with everyone!

We were recently hired to complete a missing feature for the app! It currently doesn’t have any configuration to authenticate users. In this project, we’ll be using `express-sessions`, Passport’s `passport-local`, and `bcrypt.js` in order to authenticate users so they can register, login and stay, and log out of the app!

We’re provided with some boilerplate code that we’ll be modifying and adding to in order to complete this. Let’s get started! 

> NOTE: If you'd like to checkout the boilerplate we were provided with checkout the `boilerplate` branch. 

## Running locally
To run this app locally follow the steps below. 
1. Clone the repo with `git clone https://github.com/lukewelden/Dognation.git`
2. At the root level of the project install the project dependencies with `npm install`
3. Once the dependencies are installed you can run the app locally with the `npm start`