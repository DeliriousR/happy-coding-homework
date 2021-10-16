/// <reference types="cypress" />

const todoName = Date.now()

describe('deleting todos', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'))
    cy.addTodo(todoName)
  })

  it('succeeds', () => {
    cy.deleteTodo(todoName)
    cy.contains(todoName).should('not.exist')
  })
})
