import express from 'express'
import connectDB from './db/connectdb.js'
const app = express()
const port = process.env.PORT || '3000'
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://gauravsdevelop:123456@localhost:27017/schooldb?authSource=schooldb"

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"

// Database Connection
connectDB(DATABASE_URL)


app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})