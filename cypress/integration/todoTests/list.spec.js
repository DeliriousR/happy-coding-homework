/// <reference types="cypress" />

import { dqa } from "../../helper/utils"

const todoName = Date.now() - 5
const todoName2 = Date.now()

describe('the todo list', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'))
    cy.addTodo(todoName)
    cy.addTodo(todoName2)
  })

  it('can list todos', () => {
    cy.get(dqa('todoItem')).should('have.length', 2)
  })

  afterEach(() => {
    cy.deleteTodo(todoName)
    cy.deleteTodo(todoName2)
  })
})
