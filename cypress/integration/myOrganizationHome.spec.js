/// <reference types='cypress'/>

import { loginPage } from "../page_object/loginHome";
import {myOrganization} from "../page_object/myOrganizationHome.js"


describe ("Kreiranje organizacije", () => {

    beforeEach("visit app", () => {
        cy.visit("/login");
      });

  
    beforeEach("visit app", () => {
        cy.visit("/login");
        loginPage.login ("lola@gmail.com", "lola123");
        myOrganization.title.should ('be.visible');
      });

      it ('Nauci vec jednom', ()=> {

    });

    it('create organization', ()=>{
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations' 
        }).as('orgIntercept');

        myOrganization.createOrganization ('Lijepa organizacija');


  //  it.only ('Create new organisation', ()=> {
  //      cy.visit ('/my-organizations');
  //      myOrganization.addOrgBtn.click();
   //     myOrganization.orgName.type ('Org1');
   //     myOrganization.buttonNext.click();
 //       myOrganization.buttonCreate.submit();

   });

});
