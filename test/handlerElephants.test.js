const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('HandlerElephants deve ser uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('com parâmetros diferente de string, a função deve retornar: "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(13)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('com parâmetro "names" a função deve retornar os nomes dos residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('com parâmetro "count" a função deve retornar 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('com parâmetro "averageAge" a função deve retornar próximo de 10,5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('com parâmetro "availability" a função deve conter Saturday e Sunday', () => {
    expect(handlerElephants('availability')).toEqual(expect.arrayContaining(['Saturday', 'Sunday']));
  });

  it('com parâmetro "popularity" a função deve retornar 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('com parâmetro "location" a função deve retornar NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('sem parâmetro a função deve retornar undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('com parâmetro deconhecido a função deve retornar null', () => {
    expect(handlerElephants('13')).toEqual(null);
  });
});
