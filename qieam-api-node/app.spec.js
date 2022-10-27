const supertest = require('supertest');
const app = require('./app')

describe('test the wrong route', () =>{
    test('it should response 404', (done) => {
        supertest(app)
            .get('/')
            .then((response) => {
                expect(response.statusCode).toBe(404);
                done();
            });
    });

    test('it should get friends', async() =>{
        const result = await supertest(app).get('/api/friends').expect(200);
        expect(result.body.friends.length).toBe(3);
    });

    test('it should delete friends', async() =>{
        //get friends
        const result = await supertest(app).get('/api/friends').expect(200);
        const resultLength = result.body.friends.length;
        //check nb of friends
        expect(resultLength).toBe(3);
        await supertest(app).delete('/api/friend?name=Oscar').expect(202);
        const result2 = await supertest(app).get('/api/friends').expect(200);
        expect(result2.body.friends.length).toBe(resultLength -1);
    });
});