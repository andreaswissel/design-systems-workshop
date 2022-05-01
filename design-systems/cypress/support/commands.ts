import { buildArgsParam } from '@storybook/router';

/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      visitComponentStory(
        componentName: string,
        storyName: string
      ): Chainable<AUTWindow>;
      visitComponentStoryWithArgs(
        componentName: string,
        storyName: string,
        args: { [key: string]: any }
      ): Chainable<AUTWindow>;
    }
  }
}

function visitComponentStory(componentName: string, storyName: string) {
  const url = `localhost:6006/iframe.html?id=components-${componentName}--${storyName}`;

  return cy.visit(url);
}

function visitComponentStoryWithArgs(
  componentName: string,
  storyName: string,
  args?: { [key: string]: any }
) {
  const url = `localhost:6006/iframe.html?id=components-${componentName}--${storyName}`;

  if (!args) {
    return cy.visit(url);
  } else {
    const urlWithArgs = `${url}&args=${buildArgsParam({}, args)}`;
    return cy.visit(urlWithArgs);
  }
}

Cypress.Commands.add('visitComponentStory', visitComponentStory);
Cypress.Commands.add(
  'visitComponentStoryWithArgs',
  visitComponentStoryWithArgs
);

export {};
