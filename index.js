const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const {createUser, getUSerById, getUser} = require("./user");
const swaggerDocs = require("./swagger.json");
const middleware = require("./middleware")
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.get("/", (req, res)=>{
   res.status(200).send(getUser());
})

app.get("/user/:id", (req, res)=>{
    res.status(200).send(getUSerById(req.params.id));
})



app.get("/terms", (req, res)=>{
    res.send({
        termos:" Eu concordo com os termos"
    });
})

app.use((req, res, next)=>{
    middleware(req, res, next);
});

app.post("/user", (req, res)=>{
    createUser(req.body);
    res.status(200).send(req.body);
})


app.listen(3000);