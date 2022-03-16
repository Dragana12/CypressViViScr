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

    get orgName (){
        return cy.get ('[type="text"]');
    }

    get orgLogo (){
        return cy.get ('[class="vs-c-settings-section-form vs-u-text--center"]');
    }

    get buttonNext (){
        return cy.get ('button');
    }

    get buttonCreate (){
        return cy.get ('[class="el-button vs-c-button-focus el-button--success el-button--large"]');
    }

    createOrg (name, logo) {
        this.orgName.type(name);
        this.orgLogo.add (logo);
        this.buttonCreate.click();
    }
}

export const myOrganization = new MyOrganization ();


