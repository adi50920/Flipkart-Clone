import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, () =>
    console.log(`Server is Runnning successfully on PORT ${PORT} `)
);