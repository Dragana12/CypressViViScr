/// <reference types='cypress'/>

import { loginPage } from "../page_object/login.js";
import {myOrganization} from "../page_object/myOrganization.js"


describe ("Kreiranje organizacije", () => {

    it ('Nauci vec jednom', ()=> {
        cy.visit ('/login');
        loginPage.login ("lola@gmail.com", "lola123");
        myOrganization.title.should ('be.visible');

    });

});
