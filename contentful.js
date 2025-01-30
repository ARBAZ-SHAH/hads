import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, // Your Contentful space ID
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Your Contentful delivery API access token
});

export default client;