import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

const connectdb = async ()=>{
    try {
        const res = await pool.query('SELECT NOW()')
        console.log('Database Connected Successfully!!! ',res.rows[0]);
    } catch (error) {
        console.log("DB connetion failed, ",error)
        process.exit(1)
    }
}

export {connectdb,pool}