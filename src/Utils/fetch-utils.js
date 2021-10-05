import request from "superagent";


export async function getAllAvatar (){
    const response = await request.get('https://airbendercharacters.herokuapp.com/avatar')

    return response.body; 
}