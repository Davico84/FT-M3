const session = require('supertest-session');
const app = require('../index.js'); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe('Test de APIS', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    it('responds with and object with message `hola`', () =>
        agent.get('/').then((res) => {
          expect(res.body.message).toEqual('hola');
        }));
  });

  describe('GET /test', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with and object with message `test`', () =>
      agent.get('/test').then((res) => {
        expect(res.body.message).toEqual('test');
      }));
  });

  describe('POST /sum', () => {
    it('responds with 200', () => agent.post('/sum').expect(200));
    it('responds with the sum of 2 and 3', () =>
      agent.post('/sum')
        .send({a: 2, b: 3})//se envia un body
        .then((res) => {
          expect(res.body.result).toEqual(5);
        })
    );
  });

  describe('POST /producto', () => {//este no se afecta x el valor devuelvo sea NaN
    it('responds with 200', () => agent.post('/product').expect(200));
    it('responds with the product of 2 and 3', () =>
      agent.post('/product')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(6);
        })
    );
  });

  describe('POST /sumArray', () => {
    it('responds with 200', () => {
        agent.post('/sumArray').send({array: [2,5,7], num: 1})
          .expect(200)
        });
    it('responds with false si ....', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 1})
        .then((res) => {
          expect(res.body.result).toEqual(false);
      }));

      it('response with true si la suma da el numero',()=>{
        agent.post('/sumArray')
          .send({array: [2,5,7,10,11,15,20], num: 1})
          .then((res) => {
            expect(res.body.result).toEqual(false)
          });
      })

      it('response with true y existo and false is not',()=>{
        agent.post('/sumArray')
          .send({array: [2,5,7,10,11,15,20], num: 10})
          .then((res) => {
            expect(res.body.result).toEqual(true)
          });
      })

      describe('POST /numString',()=>{
        it('response with 400 if string is a number',()=>{
          agent.post('/numString').send({string:80}).expect(400)
        })
        it('response with 400 if string is a smpty',()=>{
          agent.post('/numString').send({string: ""}).expect(400)
        })
        it('response with 200 if recibo numero',()=>{
          agent.post('/numString').send({string: "hola"}).expect(200)
        })
        it('response with 200 if recibo numero',()=>{
          agent.post('/numString').send({string: "hola"})
          .then(res=>{
            expect(res.body.result).toEqual(4)
          })
        })
      })

      describe('POST /pluck',()=>{

        const array= [
            {alumno: "David", edad:30,  carrera: "full web"},
            {alumno: "rafa",  edad :20,  carrera: "fronend" },
            {alumno: "Karen", edad:50,  carrera: "Odonto"}
          ]
        
        it('response with 400 if no es un array',()=>{
          agent.post('/pluck').send({array:101, prop:'edad'}).expect(400)
        })
        it('response with 400 if no es una prop',()=>{
          agent.post('/pluck').send({array:array, prop:''}).expect(400)
        })
        it('response with 200 if es array y prop valido',()=>{
          agent.post('/pluck').send({array:array, prop:'edad'}).expect(200)
        })
        
        it('PLUCK response with 200 if recibo 1 objeto y prop',()=>{
          return agent.post('/pluck').send({array:array,prop:'edad'})
          .then(res=>{
            console.log('-------')
            console.log(res.body.result)
            expect(res.body.result).toEqual([30,20,50])
          })
        })
      })


  });
  // describe('POST /pluck', () => {
  //   it('return an array with the selecte value', () => agent.post('/pluck')
  //       .send({a: 2, b: 3
  //       })
  //       .then((res)=>{
  //         .expect(res.body.result.to.be.deep.equal(['algo', 'algo mas', 'algo extra']))
  //       })
  //       .expect(200))
  //         expect(res.body.result).toEqual(6);
  //       })
  //   );
  // });



});