/// <reference types= "cypress" />
describe('login', () => {
  it.skip('standard_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    
    // cy.get(".btn").click({ multiple: true }
    //   )
  let numberOfItem=5;
  for(let i=0;i<numberOfItem;i++){
      cy.get(".btn").eq(i).click()
      cy.screenshot()
  }
 




  })
  it('problem_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("problem_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    
    
  });
})