# CircleCI

### Running Cypress on CircleCI

[Cypress Orb](https://circleci.com/developer/orbs/orb/cypress-io/cypress)

Sample

```
version: 2.1
orbs:
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      - cypress/run:
          executor: cypress/base-14
          yarn: true
          working_directory: frontend
          store_artifacts: true
          start: npm start
          record: true
```

***Arguments***

`store_artifacts` - stores artifacts in CircleCI

`start` - sets a custom start command

`record` - toggles record

`working_directory` - sets a custom working directory 
