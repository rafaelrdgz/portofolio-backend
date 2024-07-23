import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routes from './src/routes/routes.js'
import transporter from './src/email/emailTransporter.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(routes)

transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });

app.listen(3000)
console.log('Server on port 3000')