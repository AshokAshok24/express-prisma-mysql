const express = require('express');
const app = express();
require('dotenv').config();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();





const port = process.env.PORT

app.listen(port, () => {
    console.log(`server Running in the port : http:localhost:${port}`);
})