/// <reference types="cypress" />

const todoName = Date.now()

describe('the todo list', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'))
    cy.addTodo(todoName)
  })

  it('can delete todos', () => {
    cy.deleteTodo(todoName)
    cy.contains(todoName).should('not.exist')
  })
})
