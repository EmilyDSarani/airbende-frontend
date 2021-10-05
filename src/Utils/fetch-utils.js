import request from "superagent";


export async function getAllAvatar() {
    const response = await request.get(`https://airbendercharacters.herokuapp.com/avatar`)

    return response.body; 
}

export async function getElements() {
    const response = await request.get(`https://airbendercharacters.herokuapp.com/element}`)

    return response.body;
}

export async function getOneAvatar(id) {
    const response = await request.get(`https://airbendercharacters.herokuapp.com/avatar/${id}`)

    return response.body;
}


export async function deleteAvatar(id) {
    const response = await request.delete(`https://airbendercharacters.herokuapp.com/avatar/${id}`)

    return response.body;
}

export async function postAvatar(avatar) {
    const response = await request.post(`https://airbendercharacters.herokuapp.com/avatar`)
    .send(avatar)

    return response.body; 
}

export async function editsAvatar(id, newAvatar) {
    const response = await request.delete(`https://airbendercharacters.herokuapp.com/avatar/${id}`)
    .send(newAvatar)
    return response.body;
}