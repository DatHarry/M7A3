const User = require('../models/userModel')
const axios = require('axios')
const loans = require('./../dev-data/data/loans.json')

// exports.home = async (req, res) => {
//   res.status(200).render('overview', {
//     title: `Over View`
//   });
// };


exports.home = async (req, res) => {
  if (req.session.userId){
    User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        res.status(200).render('overview', {
          title: `Over View`
        
        });
      } else {
        return res.render('overview', { title: 'Over View', name: user.name});
      }
      req.session.name = user.name
    }); 
  }
  else {
    res.status(200).render('overview', {
    title: `Over View`
  });
  }
};

// //loan
// exports.getLoan = async (req, res) => {
//   const queryLoan = await axios.get('http://localhost:3000/api/v1/loans')
//   //console.log('=============12==================', queryLoan);
//   res.status(200).render('allLoanList', {
//     title: `Get Loan List`,
//     "loans": queryLoan
//   });
// };



exports.getMyLoan = async (req, res) => {

  // console.log(req.session)
  const query = await axios.get('http://localhost:3000/api/v1/loans/My',{params:{name:req.session.name}})
  // console.log(query.data.loans)
  res.status(200).render('myloanlists', {
    title: `Get loanlists`,
    "loans": query.data.loans,
    name: req.session.name
  });
};


exports.getAllLoan = async (req, res) => {

  // console.log(req.session)
  const query = await axios.get('http://localhost:3000/api/v1/loans/')
  // console.log(query.data.loans)
  res.status(200).render('allloanlists', {
    title: `Get loanlists`,
    "loans": query.data.loans,
    name: req.session.name
  });
};

exports.getAllUser = async (req, res) => {

  // console.log(req.session)
  const query = await axios.get('http://localhost:3000/api/v1/users/')
  // console.log(query.data)
  res.status(200).render('alluserlists', {
    title: `Get userlists`,
    "users": query.data.users,
    name: req.session.name
  });
};



exports.getCourse = async (req, res) => {
  res.status(200).render('Course', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};


// get // signup
exports.getSignUpForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign up New User'
  });
};



// get // login
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log in to your account'
  });
};


exports.CreateNewLoan = (req, res) => {
  res.status(200).render('newLoan', {
    title: 'Create New Loan',
    name: req.session.name
  });
};

exports.logout = (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
};
exports.getAll