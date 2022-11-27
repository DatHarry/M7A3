const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
    .route('/')
    .get(loanController.getAllLoans)
    .post(loanController.createLoan, function(req, res){
        res.redirect('/')
    });


router
    .route('/My')
    .get(loanController.getMyLoans)
router
    .route('/:id')
    .get(loanController.getloan)
//    .patch(loanController.updateLoan)
//    .delete(loanController.deleteLoan);

module.exports = router;
