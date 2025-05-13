import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then('é apresentado a mensagem {string} no body', (mensagem) => {
    cy.get('@response').then(resp => {
        expect(resp.body.message).to.equal(mensagem)
    })
})

Then('é retornado o status code {int}', (statusCode) => {
    cy.get('@response').then(resp => {
        expect(resp.status).to.equal(statusCode)
    })
})