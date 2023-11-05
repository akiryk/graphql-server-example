# Apollo Server

This is the server app that goes with the basic-next-app repo.

It uses MongoDB and is deployed on Heroku.

[Started with ApolloServer tutorial](https://www.apollographql.com/docs/apollo-server/getting-started/).

deployed to https://varioso.herokuapp.com/
See sandbox at https://varioso-668b109fd65d.herokuapp.com/

## MongoDB

Log in using yahoo email account.
Use the Atlas project named ReadyLab.
ReadyLab contains several collections.
Currently, I'm playing around in the one called sample_mflix.

## Run locally

- `npm run dev`
- locally, visit http://localhost:4000/

## Run in Prod

Push changes:

You can `git push heroku` but this repo is on github so better to:

- `git push`
- then `git push heroku` or else [visit heroku](https://dashboard.heroku.com/apps/varioso/deploy/github) and click to deploy the main branch.

To see the graphql explorer, run `heroku open`

To see logs: `heroku logs --tail`

To see the app in Next on Vercel: https://basic-next-app-alpha.vercel.app/

To change configs, go to [varioso/settings](https://dashboard.heroku.com/apps/varioso/settings) and open "Config Vars"

## Heroku gotchas

- Be sure the Procfile points to the correct node command (e.g. if you change files to be in a `dist` directory, change the Procfile)

## Background

To set this up, I started with a tutorial about MongoDB and Graphql, https://reflectoring.io/tutorial-graphql-apollo-server-nodejs-mongodb/

## Operations

### Search for Students

```
query ExampleQuery {
  students {
    firstName
    lastName
    id
  }
}
```

### Mutations

```
mutation MyFirstMutation($firstName: String, $lastName: String, $age: Int) {
  create(firstName: $firstName, lastName: $lastName, age: $age) {
    firstName
    lastName
    age
    id
  }
}
```
