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

  it('can filter todos', () => {
    cy.get(dqa('todoItem')).should('have.length', 2)
    cy.toggleTodoStatus(todoName2)

    cy.get(dqa('incomplete')).click()
    cy.get(dqa('todoItem')).should('have.length', 1)
    cy.contains(todoName).should('exist')
    cy.contains(todoName2).should('not.exist')

    cy.get(dqa('completed')).click()
    cy.get(dqa('todoItem')).should('have.length', 1)
    cy.contains(todoName).should('not.exist')
    cy.contains(todoName2).should('exist')

    cy.get(dqa('allItems')).click()
    cy.get(dqa('todoItem')).should('have.length', 2)
    cy.contains(todoName).should('exist')
    cy.contains(todoName2).should('exist')
  })

  afterEach(() => {
    cy.deleteTodo(todoName)
    cy.deleteTodo(todoName2)
  })
})
