const DataBankManagerLogin = {


    buttonbankmanager(){
        cy.xpath("//button[.='Bank Manager Login']").click();
    },
        //ADD CUSTOMER
    addcustomertab(){
        cy.xpath("//button[contains(.,'Add Customer')]").click();
    },
    firstname(firstname){
        cy.get("input[placeholder='First Name']").type(firstname);
    },
    lastname(lastname){
        cy.get("input[placeholder='Last Name']").type(lastname);
    },
    postcode(postcode){
        cy.get("input[placeholder='Post Code']").type(postcode);
    },
    submitcustomer(){
        cy.xpath("//button[@class='btn btn-default']").click();
    },
    assertionaddcustomer(){
        cy.get(".btn-primary").wait(2000).should("contain.text", "Add Customer")
    },

    //OPEN ACCOUNT
    openaccounttab(){
        cy.get("[ng-class='btnClass2']").click();
    },
    customernameopenaccount(userSelect){
        cy.get("#userSelect").select(userSelect);
    },
    curencyopenaccount(currency){
        cy.get("#currency").select(currency);
    },
    processedopenaccount(){
        cy.xpath("//button[contains(.,'Process')]").click();
    },

    //CUSTOMER HERMOINE
    buttoncustomers(){
        cy.xpath("//button[contains(.,'Customers')]").click();
    },
    customerhermoine(customername){
        cy.get("input[placeholder='Search Customer']").clear().type(customername);
    },
    deleteCustomerHermoine(customername){
        cy.get("input[placeholder='Search Customer']").clear().type(customername);
        cy.xpath("//button[.='Delete']").click();
    },
    deleteCustomerHarry(customername){
        cy.get("input[placeholder='Search Customer']").clear().type(customername);
        cy.xpath("//button[.='Delete']").click();
    },
    deleteCustomerRon(customername){
        cy.get("input[placeholder='Search Customer']").clear().type(customername);
        cy.xpath("//button[.='Delete']").click();
    },
    deleteCustomerAlbus(customername){
        cy.get("input[placeholder='Search Customer']").clear().type(customername);
        cy.xpath("//button[.='Delete']").click();
    },

}

export default DataBankManagerLogin;