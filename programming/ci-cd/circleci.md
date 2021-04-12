# CircleCI

Links

- [Fastlane](https://fastlane.tools/)
- [Building and Deploying Flutter Applications](https://circleci.com/blog/deploy-flutter-android/)
- [CD with Flutter](https://flutter.dev/docs/deployment/cd)

### Monorepo Caching

```
commands:
  create_concatenated_package_lock:
    description: "Concatenate all package-lock.json files recognized by lerna.js into single file. File is used as checksum source for part of caching key."
    parameters:
      filename:
        type: string
    steps:
      - run:
          name: Combine package-lock.json files to single file
          command: npx lerna la -a | awk -F packages '{printf "\"packages%s/package-lock.json\" ", $2}' | xargs cat > << parameters.filename >>

```

```
    steps:
      - checkout
      - create_concatenated_package_lock:
          filename: combined-package-lock.txt
      ## Use combined-package-lock.text in cache key
      - restore_cache:
          keys:
            - v3-deps-{{ checksum "package-lock.json" }}-{{ checksum "combined-package-lock.txt" }}
            - v3-deps`
```

Links

- [Concentrated `package-lock` checksum](https://circleci.com/docs/2.0/caching/#creating-and-building-a-concatenated-package-lock-file)


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
          cache-key: 'yarn-packages-{{ arch }}-{{ checksum "yarn.lock" }}'
          store_artifacts: true
          start: 'yarn dev'
          wait-on: 'http://localhost:3000'
          record: true
          no-workspace: true
          post-install:
            - run: 'npx lerna bootstrap'
            - run: 'yarn build:libraries'
            - run: 'yarn setup'
          command: yarn cypress
```

to use Chrome

```
  executor: cypress/browsers-chrome69
  browser: chrome
```

***Arguments***

`store_artifacts` - stores artifacts in CircleCI

`start` - sets a custom start command

`record` - toggles record

`working_directory` - sets a custom working directory 

Links

- [Example](https://github.com/cypress-io/cypress-example-circleci-orb/blob/master/.circleci/config.yml)
- [Executors](https://github.com/cypress-io/cypress-docker-images/tree/master/browsers)
- [Deploying iOS](https://circleci.com/docs/2.0/deploying-ios/#app-store-connect)
- [Circle iOS Example](https://github.com/CircleCI-Public/circleci-demo-ios)

