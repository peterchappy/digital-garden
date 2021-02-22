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
          start: 'yarn dev:consumer'
          wait-on: 'http://localhost:3000'
          record: true
          post-install:
            - run: 'npx lerna bootstrap'
            - run: 'yarn build:libraries'
            - run: 'yarn setup'
          command: yarn cypress:consumer
```

***Arguments***

`store_artifacts` - stores artifacts in CircleCI

`start` - sets a custom start command

`record` - toggles record

`working_directory` - sets a custom working directory 
