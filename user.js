const users=[{
    id:"8394783",
    name:"João Gabriel",
    email:"joaogabriel@gmail.com",
    adm:false
},{
    id:"5786586",
    name:"Lucas",
    email:"lucasfelipe@gmail.com",
    adm:false
},
{
    id:"4675756",
    name:"Rafael",
    email:"rafael@gmail.com",
    adm:true
}];


const getUser = ()=>{
    
    return users;
}

const getUSerById = (id)=>{
    const user = users.find(user_=>user_.id === id);
  
    if(user){

        return user;
    }

    return null;
}

const createUser = (user)=>{
    users.push(user);

    return;
}

module.exports = {createUser, getUSerById, getUser};