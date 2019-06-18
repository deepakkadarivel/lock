// / <reference types="cypress" />
// @ts-check

describe('Home page', () => {
    it('Select a user and click on available doors to access it', () => {
        // Render empty people page initially
        cy.visit('/');
        cy.get('.t-placeholder').contains('No Doors available to unlock.');

        // Add doors to assign to user
        cy.visit('/doors');
        cy.get('.Fab').click();
        cy.get('.t-input--name')
            .type('door1')
            .should('have.value', 'door1');
        cy.get('.t-add').click();

        cy.get('.Fab').click();
        cy.get('.t-input--name')
            .type('door2')
            .should('have.value', 'door2');
        cy.get('.t-add').click();

        // Add users with door access
        cy.visit('/people');
        cy.get('.Fab').click();
        cy.get('.t-input--name')
            .type('user1')
            .should('have.value', 'user1');
        cy.get('.t-input--doors').click();
        cy.get('#react-select-2-option-0').click();
        cy.get('.Dialog').click();
        cy.get('.t-add').click();

        // select a user to access door
        cy.visit('/');

        cy.get('.Fab').click();
        cy.get('.t-input--users').click();
        cy.get('#react-select-2-option-0').click();

        cy.get('.Doors > :nth-child(1)').click();
        // todo: handle toast
        // cy.get('.Toastify__toast-body').contains('Granted access for : door1');

        cy.get('.Doors > :nth-child(2)').click();
        // todo: handle toast
        // cy.get('.Toastify__toast-body').contains('Denied access for : door1');

        // Delete added person
        cy.visit('/people');
        cy.get('.Card').should('have.length', 1);
        cy.get('.t-delete').click();

        // Delete added doors
        cy.visit('/doors');
        cy.get('.Card').should('have.length', 2);
        cy.get('.t-delete').click({ multiple: true });

        // Render empty people page finally
        cy.visit('/');
        cy.get('.t-placeholder').contains('No Doors available to unlock.');
    });
});
