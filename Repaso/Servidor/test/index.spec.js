const session = require('supertest-session')
const app = require('./server')
const Pendiente=require('../Modelos/Pendiente')
const agent= session(app);

const pendienteMock=new Pendiente();


describe('test APi Lista pendiente', ()=>{
    describe('/pendiente',()=>{
        describe('GET', ()=>{
            it('response with 200',()=>agent.get('/pendiente/3').expect(200)) 
            it('response with 400 si no no se encuentra ID',()=>agent.get('/pendiente/3').expect(400)) 
            it('return an objet with a pendiente',
            // ()=>agent.get('/pendiente/0').then((res)=>{
            //     expect(typeof res.body.result).toEqual('object')
            // }))
            async ()=>{
                const result = await agent.get('/pendiente/0')
                expect(typeof res.body.result).toEqual('object')
                      })
                    })
        })  
    })