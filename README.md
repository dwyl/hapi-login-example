# `hapi-login` *example*

[![Build Status](https://travis-ci.org/nelsonic/hapi-login-example.svg)](https://travis-ci.org/nelsonic/hapi-login-example)
[![codecov.io](http://codecov.io/github/nelsonic/hapi-login-example/coverage.svg?branch=master)](http://codecov.io/github/nelsonic/hapi-login-example?branch=master)
[![Code Climate](https://codeclimate.com/github/nelsonic/hapi-login-example/badges/gpa.svg)](https://codeclimate.com/github/nelsonic/hapi-login-example)
[![Dependency Status](https://david-dm.org/nelsonic/hapi-login-example.svg)](https://david-dm.org/nelsonic/hapi-login-example)
[![devDependency Status](https://david-dm.org/nelsonic/hapi-login-example/dev-status.svg)](https://david-dm.org/nelsonic/hapi-login-example#info=devDependencies)
[![HitCount](https://hitt.herokuapp.com/nelsonic/hapi-login-example.svg)](https://github.com/nelsonic/hapi-login-example)

## Why?

> "*I hear and I forget. I see and I remember. I do and I understand.*" ~ Confucius

We did not *find* an ***end-to-end*** solution+tutorial
for login (using email & password) in Hapi.js apps,
so we wrote it.

`if` ***anything*** is ***unclear*** in this (*or any of our other repos*),
***please tell us***:
[![Join the chat at https://gitter.im/dwyl/chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dwyl/chat/)  



## What?

This repo is a *showcase* for how to use the
[**hapi-register**](https://github.com/nelsonic/hapi-register) plugin
for a *simple* (*yet complete*) web/app registration process.


## Try it: https://hapi-reg.herokuapp.com/

![register form](https://cloud.githubusercontent.com/assets/194400/10197712/d6cc0348-6790-11e5-86ca-dc218bdffd54.png)

## How?

The best way to get started is to run this example *locally*.

#### 1. Clone the repo:

```sh
git clone git@github.com:nelsonic/hapi-login-example.git
```
#### 2. Install *Dependencies* from NPM

```sh
npm install
```

#### 3. Run the Server

```sh
npm start
```

That's it.  
Now, hack to heart's content!


When we submit the form without any of the required fields we see:

![register-1of4](https://cloud.githubusercontent.com/assets/194400/10266518/ce0c2ba6-6a61-11e5-89bc-4abf33b30f21.png)

![register-3of4](https://cloud.githubusercontent.com/assets/194400/10266523/680d1922-6a62-11e5-9533-3560a646dfd0.png)

We also use https://github.com/chriso/validator.js
to mitigate [Cross Site Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
vulnerability:

Avoids Cross Site Scripting:
![register-hack-1of2](https://cloud.githubusercontent.com/assets/194400/10267320/5dd3bad6-6a87-11e5-888b-f1e1dbbf9f39.png)

Displays welcome message on successful registration:
![reg-success-1of2](https://cloud.githubusercontent.com/assets/194400/10267355/c7d8a31e-6a88-11e5-8bf9-3bb148e2d870.png)

## Want *More*?

If you would like to see this example *expanded*,
please either [***create an issue***](https://github.com/nelsonic/hapi-login-example/issues)
with a *specific request* or [![Join the chat at https://gitter.im/dwyl/chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dwyl/chat/)
