class LoginPage {

    get email(){
        return cy.get('[type="email"]');
    }

    get password(){
        return cy.get('[type="password"]');
    }

    get loginBtn(){
        return cy.get('[type="submit"]');
    }

    get forgotenPass(){
        return cy.get('[href="/forgot-password"]');
    }
    get badEmail (){
        return cy.get ('[class="el-form-item__error el-form-item-error--top"]');
    }

    get wrongPassMessage (){
        return cy.get ('[class="el-form-item__error el-form-item-error--top"]');

    }

    get emptyFieldMessage (){
        return cy.get ('[class="el-form-item__error el-form-item-error--top"]');
        
    }

    login(email, password){
        this.email.type(email);
        this.password.type(password);
        this.loginBtn.click();
    }

    
}

export const loginPage = new LoginPage();
