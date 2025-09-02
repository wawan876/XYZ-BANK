
import DataLoginCustomer from "../../PageObject/DataLoginCustomer";
import Customer from "../../fixtures/Customer.json"

describe ('Customer Login', () => {
    beforeEach(() => {
        DataLoginCustomer.visitlogin();
        DataLoginCustomer.buttoncustomer();    
    });
    it('Login Cust Hermoine', () => {  
        DataLoginCustomer.customername(Customer[0].customername1);
        DataLoginCustomer.submitlogin();
        DataLoginCustomer.assertionloginsucces();
    });
    it('Login Cust Harry Potter', () => {
        DataLoginCustomer.customername(Customer[0].customername2);
        DataLoginCustomer.submitlogin();
        DataLoginCustomer.assertionloginsucces();
    });
    it('Login Cust Ron Weasly', () => {
        DataLoginCustomer.customername(Customer[0].customername3);
        DataLoginCustomer.submitlogin();
        DataLoginCustomer.assertionloginsucces();
    });
    it('Login Cust Albus Dumbledore', () => {
        DataLoginCustomer.customername(Customer[0].customername4);
        DataLoginCustomer.submitlogin();
        DataLoginCustomer.assertionloginsucces();
    });

    describe.only('Customer Transactions', () => {
        beforeEach(() => {
            DataLoginCustomer.visitlogin();
            DataLoginCustomer.buttoncustomer();
        });
        it ('Deposit Account Hermoine Granger 1001',() =>{
            DataLoginCustomer.customername(Customer[0].customername1);
            DataLoginCustomer.submitlogin();
            DataLoginCustomer.currency(Customer[1].currencyselect1);
            DataLoginCustomer.deposit();
            DataLoginCustomer.inputamountdeposit();
            DataLoginCustomer.inputbtndeposit();
            DataLoginCustomer.assertiondeposit();

        })

        it ('Deposit Account Harry Potter 1005',() =>{
            DataLoginCustomer.customername(Customer[0].customername2);
            DataLoginCustomer.submitlogin();
            DataLoginCustomer.currency(Customer[1].currencyselect2);
            DataLoginCustomer.deposit();
            DataLoginCustomer.inputamountdeposit();
            DataLoginCustomer.inputbtndeposit();
            DataLoginCustomer.assertiondeposit();

        })
        it ('Withdrawl Account Hermoine Granger 1001',() =>{
            DataLoginCustomer.customername(Customer[0].customername1);
            DataLoginCustomer.submitlogin();
            DataLoginCustomer.currency(Customer[1].currencyselect1);
            DataLoginCustomer.withdrawl();
            DataLoginCustomer.inputamountwithdrawl(Customer[2].withdrawl1);
            DataLoginCustomer.inputbtnwhitdraw();
            DataLoginCustomer.assertionwhitdrawsucces();

        })
        it ('Withdrawl Account Hermoine Granger 1001',() =>{
            DataLoginCustomer.customername(Customer[0].customername1);
            DataLoginCustomer.submitlogin();
            DataLoginCustomer.currency(Customer[1].currencyselect1);
            DataLoginCustomer.withdrawl();
            DataLoginCustomer.inputamountwithdrawl(Customer[2].withdrawl2);
            DataLoginCustomer.inputbtnwhitdraw();
            DataLoginCustomer.assertionwhitdrawfailed();

        })
        it ('Withdrawl Account Hermoine Granger 1001 without input amount',() =>{
            DataLoginCustomer.customername(Customer[0].customername1);
            DataLoginCustomer.submitlogin();
            DataLoginCustomer.currency(Customer[1].currencyselect1);
            DataLoginCustomer.withdrawl();
            DataLoginCustomer.inputbtnwhitdraw();
            DataLoginCustomer.assertionwithoutamount();

        })
        
    });
    
})