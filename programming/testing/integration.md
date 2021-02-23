# Integration Testing

## Cypress

### Return a status code

```ts
cy.intercept('**/users/me', { statusCode: 401 }).as('getUser')

```

### Wild Cards with intercept

```ts
// base url
cy.intercept('**/users/me', { fixture: 'user_me_sign_in' }).as('getUser')

//query params
cy.intercept('/appointments**', { content: [] }).as('getAppointments')

//additional paths
cy.intercept('/appointments/*', { content: [] }).as('getAppointments')
```

- [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
- [Setting up with CircleCI](https://docs.chapman.codes/ci-cd/circleci)
- [Assert URL](https://docs.cypress.io/api/commands/url.html#No-Args)
- [Configuration](https://docs.cypress.io/guides/references/configuration.html#Timeouts)
- [Mock Requests](https://docs.cypress.io/guides/guides/network-requests.html#Routing)