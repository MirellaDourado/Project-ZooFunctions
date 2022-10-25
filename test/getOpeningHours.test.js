const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('deve ser uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('deve retornar um objeto com os dias e seus horários', () => {
    const days = {
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    };
    expect(getOpeningHours()).toEqual(days);
  });

  it('recebendo 13 deve retornar The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-PM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('se não for um dia em inglês deve retornar The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('miercules', '13:00-PM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('se o minuto for 70 deve retornar The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Saturday', '3:70-PM')).toThrow(/^The minutes must be between 0 and 59$/);
  });

  it('sem receber números no horário deve retornar The hour should represent a number', () => {
    expect(() => getOpeningHours('Monday', 'PM')).toThrow(/^The hour should represent a number$/);
  });

  it('sem receber PM deve retornar The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Thursday', '19:00-XP')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('recebendo string e não numero deve retornar The hour should represent a number', () => {
    expect(() => getOpeningHours('Tuesday', 'upper-XP')).toThrow(/^The hour should represent a number$/);
  });

  it('deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Wednesday', '10:00-AM')).toEqual('The zoo is open');
  });
});
