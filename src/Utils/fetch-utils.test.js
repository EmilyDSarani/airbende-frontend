import 
{getAllAvatar,

} from './fetch-utils.js';

test('get all avatar characters', async () => {
    const expectations = {
        id: expect.any(Number),
        name: expect.any(String),
        element_id: expect.any(Number),
        element_name: expect.any(String),
        title: expect.any(String),
        img: expect.any(String),
        owner_id: 1
    }
    const response = await getAllAvatar();

    expect(response[0]).toEqual(expectations)
});