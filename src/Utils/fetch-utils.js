import request from "superagent";


export async function getAllAvatar(){
    const response = await request.get(`https://airbendercharacters.herokuapp.com/avatar`)

    return response.body; 
}

export async function getOneAvatar(id){
    const response = await request.get(`https://airbendercharacters.herokuapp.com/avatar/${id}`)

    return response.body;
}