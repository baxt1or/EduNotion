// import { neon } from '@neondatabase/serverless'
// import { drizzle } from 'drizzle-orm/neon-http'
// import * as schema from './schema'


// const sql = neon(process.env.DATABASE_URL!)


// // @ts-ignore
// const db = drizzle(sql, { schema })

// export default db


import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '@/db/schema'



dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log('No Database Connection');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });

export default db;