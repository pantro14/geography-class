# GraphQL codegen for countries open API

## Schema SDL
- [Schema here](https://studio.apollographql.com/public/countries/variant/current/schema/sdl)

## Create autocomplete file with graphql codegen

`graphql-codegen --config src/graphql/codegen.yml`
`prettier --write src/graphql/auto-generated.ts`
