import DataBankManagerLogin from "../../PageObject/DataBankManagerLogin";
import DataLoginCustomer from "../../PageObject/DataLoginCustomer";
import customer from "../../fixtures/Customer.json"

describe('ADD CUSTOMER', () => {
    beforeEach(() => {
        DataLoginCustomer.visitlogin();
        DataBankManagerLogin.buttonbankmanager();
    });

    it('Add customer', () => {
        DataBankManagerLogin.addcustomertab();
        DataBankManagerLogin.firstname('Wawan');
        DataBankManagerLogin.lastname('Prastyo');
        DataBankManagerLogin.postcode('12345');
        DataBankManagerLogin.submitcustomer();
        DataBankManagerLogin.assertionaddcustomer();
    });
    it('customer without last name & Postcode', () => {
        DataBankManagerLogin.addcustomertab();
        DataBankManagerLogin.firstname("Wawan");
        DataBankManagerLogin.submitcustomer();
        DataBankManagerLogin.assertionaddcustomer();
    });

    it('customer without first name & postcode', () => {
        DataBankManagerLogin.addcustomertab();
        DataBankManagerLogin.lastname("Prastyo");
        DataBankManagerLogin.submitcustomer();
        DataBankManagerLogin.assertionaddcustomer();
    });

    it('customer without first name & last name', () => {
        DataBankManagerLogin.addcustomertab();
        DataBankManagerLogin.postcode("12345");
        DataBankManagerLogin.submitcustomer();
        DataBankManagerLogin.assertionaddcustomer();
    });
});

    describe('OPEN ACCOUNT', () => {
        beforeEach(() => {
            DataLoginCustomer.visitlogin();
            DataBankManagerLogin.buttonbankmanager();
        });

        it('Open account Hermoine dollar', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername1);
            DataBankManagerLogin.curencyopenaccount('Dollar');
            DataBankManagerLogin.processedopenaccount();
        });
        it('Open account Hermoine Pound', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername1);
            DataBankManagerLogin.curencyopenaccount('Pound');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Hermione Rupee', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername1);
            DataBankManagerLogin.curencyopenaccount('Rupee');
            DataBankManagerLogin.processedopenaccount();
        });
        it('Open account Harry Dollar', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername2);
            DataBankManagerLogin.curencyopenaccount('Dollar');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Harry Rupee', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername2);
            DataBankManagerLogin.curencyopenaccount('Rupee');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Ron Weasly Dollar', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername3);
            DataBankManagerLogin.curencyopenaccount('Dollar');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Ron Weasly Pound', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername3);
            DataBankManagerLogin.curencyopenaccount('Pound');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Ron Weasly Rupee', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername3);
            DataBankManagerLogin.curencyopenaccount('Rupee');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Albus Dumbledore Dollar', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername4);
            DataBankManagerLogin.curencyopenaccount('Dollar');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Albus Dumbledore Pound', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername4);
            DataBankManagerLogin.curencyopenaccount('Pound');
            DataBankManagerLogin.processedopenaccount();
        });
         it('Open account Albus Dumbledore Rupee', () => {
            DataBankManagerLogin.openaccounttab();
            DataBankManagerLogin.customernameopenaccount(customer[0].customername4);
            DataBankManagerLogin.curencyopenaccount('Rupee');
            DataBankManagerLogin.processedopenaccount();
        });

        describe.only('CUSTOMER', () => {
            beforeEach(() => {
            DataLoginCustomer.visitlogin();
            DataBankManagerLogin.buttonbankmanager();
            DataBankManagerLogin.buttoncustomers();
        });
            it('SEARCH NAME Hermoine Granger', () => {
                DataBankManagerLogin.customerhermoine("Hermoine")
            });
            it('Delete Account Hermoine', () => {
                DataBankManagerLogin.deleteCustomerHermoine("Hermoine")
            });
            it('Delete Account Harry', () => {
                DataBankManagerLogin.deleteCustomerHarry("Harry")
            });
             it('Delete Account Ron', () => {
                DataBankManagerLogin.deleteCustomerRon("Ron")
            });
            it('Delete Account Albus', () => {
                DataBankManagerLogin.deleteCustomerAlbus("Albus")
            });

        });
        
    });