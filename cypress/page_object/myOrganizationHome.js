/// <reference types='cypress'/>


class MyOrganization {

    get title (){
        return cy.get ('[class="vs-u-text--uppercase"]');
    }

    get addOrgBtn (){
        return cy.get ('[class="vs-c-list__btn el-tooltip vs-c-list-btn--new-workspace"]');
    }
    get newOrgHeading (){
        return cy.get ('span=New Organisation');
    }
    get addOrganisation (){
        return cy.get ('[class="vs-c-icon"]');
    }
    get orgName (){
        return cy.get ('input');
    }

    get orgLogo (){
        return cy.get ('[class="vs-c-settings-section-form vs-u-text--center"]');
    }

    get buttonNext (){
        return cy.get ('button');
    }

    get buttonCreate (){
        return cy.get ('button');
    }
   
    createOrganization(name){
        this.addOrganisation.click();
        this.orgName.type(name);
        this.buttonNext.click({multiple:true, force: true});
        this.buttonCreate.click();
    }
}

export const myOrganization = new MyOrganization ();


