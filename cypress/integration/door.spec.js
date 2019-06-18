// / <reference types="cypress" />
// @ts-check

describe('Doors page', () => {
    it('Add and remove doors', () => {
        // Render empty doors page initially
        cy.visit('/doors');
        cy.get('.t-placeholder').contains('No doors available, add some.');

        // Add a door and  throw error when field empty
        cy.get('.Fab').click();
        cy.get('.t-add').click();
        cy.get('.Form-input--error').contains('Required');

        cy.get('.t-input--name')
            .type('door1')
            .should('have.value', 'door1');
        cy.get('.t-add').click();

        // delete a door
        cy.get('.Card').should('have.length', 1);
        cy.get('.t-delete').click();

        // Render empty doors page finally
        cy.get('.t-placeholder').contains('No doors available, add some.');
    });
});
