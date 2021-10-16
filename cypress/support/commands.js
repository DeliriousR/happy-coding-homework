// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

import { dqa } from "../helper/utils"

Cypress.Commands.add('addTodo', (todoName) => {
  cy.get(dqa('inputBar'))
    .type(todoName)
    .blur()
  cy.get(dqa('submitButton')).click()
})

Cypress.Commands.add('deleteTodo', (todoName) => {
  cy.get(dqa(`delete-${todoName}`)).click()
})

Cypress.Commands.add('toggleTodoStatus', (todoName) => {
  cy.get(dqa(`checkbox-${todoName}`)).click()
})
