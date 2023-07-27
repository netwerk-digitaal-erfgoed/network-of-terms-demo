# Network of Terms demonstrator

This is a demonstrator for the [Network of Terms](https://www.netwerkdigitaalerfgoed.nl/en/knowledge-services/usable-digital-heritage/network-of-terms/).

Collection managers can [use this demonstrator](https://termennetwerk.netwerkdigitaalerfgoed.nl/) for looking up terms in the Network of Terms.

Software developers may be interested in the source code as an example implementation of a client for the 
[Network of Terms GraphQL API](https://github.com/netwerk-digitaal-erfgoed/network-of-terms-api). 

This implementation is a TypeScript/Vue 3 browser client app.

## Development

Run the dev version using node:

```bash 
$ npm install
$ npm run dev
```

Run the dev version using docker:
```bash
$ docker compose run --service-ports --rm node
```
