import { Client,Databases } from 'appwrite';
export const PROJECT_ID = ''
export const DATABASE_ID = ''
export const COLLECTION_ID_MESSAGES = ''
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6667432b0036dda48279');

 export const databases = new Databases(client);

export default client;