/// <reference types="cypress" />

import { dqa } from "../../helper/utils"

const todoName = Date.now()
const todoNameEdit = `${todoName}-NEW`

describe('editing todos', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'))
    cy.addTodo(todoName)
  })

  it('succeeds', () => {
    cy.get(dqa(`edit-${todoName}`)).click()
    cy.get(dqa(`delete-${todoName}`)).should('be.disabled')

    cy.get(dqa('inputBar'))
      .clear()
      .blur()
    cy.get(dqa('submitButton')).should('be.disabled')

    cy.get(dqa('inputBar'))
      .type(todoNameEdit)
      .blur()

    cy.get(dqa('submitButton')).click()
    cy.contains(todoNameEdit).should('exist')
  })

  afterEach(() => {
    cy.deleteTodo(todoNameEdit)
  })
})
