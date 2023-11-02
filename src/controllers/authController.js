// controllers/authController.js
import User from '../models/user.js';
import passport from 'passport';

export const getRegister = (req, res) => {
  res.render('register');
};

export const postRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User({
      username,
      password,
    });

    await User.register(user, password, (err) => {
      if (err) {
        console.error(err);
      } else {
        // User registered successfully
        // Redirect or perform other actions as needed
        res.redirect('/auth/login');

      }
    });


  } catch (error) {
    // Handle registration errors
    console.error(error);
    res.redirect('/auth/register');
  }
};

export const getLogin = (req, res) => {
  res.render('login');
};

export const postLogin = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/auth/login',
  })(req, res, next);
};



export const getLogout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error(err);
      return next(err);
    }
    res.redirect('/');
  });
};


export const getHome = (req, res) => {
  if (req.isAuthenticated()) {
    // User is authenticated, render the home view or perform your logic
    res.render('home');
  } else {
    res.render('notAuthorized');
  }
};
