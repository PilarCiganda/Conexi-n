const express = require("express");
const cors = require("cors");

const app= express();
const PORT= 3001;

app.use(cors());
app.use(express.json({ limit: "30mb", extendend: true }));
app.use(express.urlencoded({ extendend: true }));


app.post("/login", function(req, res){
    const usuario = req.body.usuario;
    const password = req.body.password;
    console.log(usuario, password)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})