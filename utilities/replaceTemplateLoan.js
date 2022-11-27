module.exports = (htmlStr, loan)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, loan.Name);
    output = output.replace(/{%AMOUNT%}/g, loan.Amount);
    output = output.replace(/{%INTEREST%}/g, loan.interestRate);
    output = output.replace(/{%LOANNUMBER%}/g, loan.loanNumber);
    output = output.replace(/{%LOANTERMYEARS%}/g, loan.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, loan.loanType);
    return output;
}