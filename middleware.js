module.exports=(req, res, next)=>{
    try{

        const token = req.headers.authorization;
        
        if(!token){

            return res.status(401).send("Unauthorized");
        }

        const [, user] = token.split(" ");

        if(user === "admin"){

             return next();
        }

        return res.status(401).send("Unauthorized");
    }catch(erro){

        return res.status(401).send("Unauthorized");
    }
    
}