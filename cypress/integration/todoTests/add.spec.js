/// <reference types="cypress" />

import { dqa } from "../../helper/utils"

const todoName = Date.now()

describe('adding new todos', () => {
  it('succeeds', () => {
    cy.visit(Cypress.env('host'))
    cy.get(dqa('submitButton')).should('be.disabled')
    cy.addTodo(todoName)
    cy.contains(todoName).should('exist')
  })

  afterEach(() => {
    cy.deleteTodo(todoName)
  })
})
