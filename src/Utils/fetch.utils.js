import request from "superagent";


export async function getAvatar (){
    const response = await request.get('https://airbendercharacters.herokuapp.com/avatar')
}