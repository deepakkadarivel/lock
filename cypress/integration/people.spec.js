// / <reference types="cypress" />
// @ts-check

describe('People page', () => {
    it('Add and remove people', () => {
        // Add a door to assign to user
        cy.visit('/doors');
        cy.get('.Fab').click();
        cy.get('.t-input--name')
            .type('door1')
            .should('have.value', 'door1');
        cy.get('.t-add').click();

        // Render empty people page initially
        cy.visit('/people');
        cy.get('.t-placeholder').contains('No members available, add some.');

        // Add a person and  throw error when field empty
        cy.get('.Fab').click();
        cy.get('.t-add').click();
        cy.get('.Form-input--error').contains('Required');

        cy.get('.t-input--name')
            .type('user1')
            .should('have.value', 'user1');
        cy.get('.t-input--doors').click();
        cy.get('#react-select-2-option-0').click();
        cy.get('.Dialog').click();
        cy.get('.t-add').click();

        // delete a person
        cy.get('.Card').should('have.length', 1);
        cy.get('.t-delete').click();

        // delete added door
        cy.visit('/doors');
        cy.get('.Card').should('have.length', 1);
        cy.get('.t-delete').click();

        // Render empty people page finally
        cy.visit('/people');
        cy.get('.t-placeholder').contains('No members available, add some.');
    });
});
