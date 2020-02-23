import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import researchersMutations from './researchers-mutations';
import groupsMutations from './groups-mutations';
import projectsMutations from './projects-mutations';
import relationsMutations from './relations-mutations';

dotenv.config();

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.GRAPHQL_URI, fetch }),
    cache: new InMemoryCache()
});

client
    .mutate({
        mutation:
            gql(researchersMutations, groupsMutations, projectsMutations, relationsMutations)

    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
