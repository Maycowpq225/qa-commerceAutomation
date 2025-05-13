import './commands'

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Cannot set properties of null')) {
        return false; // impede que o erro quebre o teste
    }
});