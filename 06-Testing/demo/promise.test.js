const promisifiedFunction = require('./promise');
//----------------------------------------------
//-------------PROMESAS RESULESTAS--------------

//FORMA 1 USANDO .THEN
xit('should resolve to Henry Promise', () => {
  return promisifiedFunction(true).then(data => {//sin el return pasa de todas
    expect(data).toBe('Henry Promise');//esperaba 'true
  });
});
//FORMA 2 USANDO LOS MATCHERS RESOLVES Y REJECTS
xit('should resolve to Henry Promise (other way)', () => {
  return expect(promisifiedFunction(true)).resolves.toBe('Henry Promise');
});
//aqui en la forma negativa
xit('should REJECT to ... (other way)', () => {
  return expect(promisifiedFunction(false)).rejects.toBe('Rejected Promise');
});
//FORMA 3 ASYNC /AWAIT
xit('should resolve to Henry Promise (async/await)', async () => {
  const data = await promisifiedFunction(true);
  expect(data).toBe('Henry Promise');
});

//----------------------------------------------
//-------------PROMESAS RECHAZADAS--------------
//eEQUIVALE A FORMA 1
it('should reject to Rejected Promise', () => {
  expect.assertions(1);//es necesaria esta linea el 1 es x el N| de funciones
  return promisifiedFunction(false).catch(e => {
    expect(e).toMatch('Rejected Promise')
  });
});
//EQUIVALE A LA FORMA 2
xit('should reject to Rejected Promise (other way)', () => {
  return expect(promisifiedFunction(false)).rejects.toMatch('Rejected Promise');
});

//EQUIVALE A LA FORMA 3
xit('should reject to Rejected Promise (async/await)', async () => {
  expect.assertions(1);
  try {
    await promisifiedFunction(false);
  } catch (error) {
    expect(error).toMatch('Rejected Promise');
  }
});