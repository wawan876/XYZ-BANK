const DataLoginCustomer = {

    visitlogin(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    },
    assertionloginsucces(){
        cy.get(".btn.logout").wait(2000).should("contain.text", "Logout");
    },
    buttoncustomer(){
        cy.xpath("//button[.='Customer Login']").click();
    },
    buttonbankmanager(){
        cy.xpath("//button[.='Bank Manager Login']").click();
    },
    //select name customer
    customername(select){
        cy.get("#userSelect").select(select);
    },
    submitlogin(){
        cy.get(".btn.btn-default").click();
    },
    //select currency
    currency(select){
        cy.get("#accountSelect").select(select);
    },
    //button transaction
    transaction(){
        cy.xpath("//button[contains(.,'Transactions')]").click();
    },
    resettransaction(){
        cy.xpath("//button[contains(.,'Reset')]").click();
    },
    //button deposit
    deposit(){
        cy.xpath("//button[contains(.,'Deposit')]").click();
    },
    inputamountdeposit(inputdeposit){
        cy.get("[ng-model='amount']").type("100");
    },
    inputbtndeposit(){
        cy.xpath("//button[@class='btn btn-default']").click();
    },
    assertiondeposit(){
        cy.get('.error').should('contain.text', 'Deposit Successful');
    },
    //button withdrawl
    withdrawl(){
        cy.xpath("//button[contains(.,'Withdrawl')]").click();
    },
    inputamountwithdrawl(inputwithdrawl){
        cy.get("[ng-model='amount']").type(inputwithdrawl);
    },
    inputbtnwhitdraw(){
        cy.get("[type='submit']").click();
    },
    assertionwhitdrawsucces(){
        cy.get('.error').should('contain.text', 'Transaction successful');
    },
    assertionwhitdrawfailed(){
        cy.get('.error').should('contain.text', 'Transaction Failed. You can not withdraw amount more than the balance.');
    },
    assertionwithoutamount(){
        cy.get('.fontBig').should('contain.text', 'Hermoine Granger');
    },
    //button logout
    logout(){
        cy.xpath("//button[contains(.,'Logout')]").click();
    }

    
}

export default DataLoginCustomer;