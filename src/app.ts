
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { adminJs, adminJsRouter } from './admin'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(PORT);
    
    console.log('Started!')
})


