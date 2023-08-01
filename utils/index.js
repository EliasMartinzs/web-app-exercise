export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '82fa316542mshf6d8db6f23554a7p1cf804jsne1730c180fba',
    'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com',
  },
};

export const optionsCalculator = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '488fbc12c0msh86d32a72473524dp117130jsnd5dc39ebcc7f',
    'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com',
  },
};

export const fetchByTagName = async muscle => {
  const response = await fetch(
    `https://musclewiki.p.rapidapi.com/exercises?muscle=${muscle}`,
    { headers: options.headers }
  );

  const data = await response.json();

  return data;
};

export const fetchByTarget = async muscle => {
  const response = await fetch(
    `https://musclewiki.p.rapidapi.com/exercises?category=${muscle}`,
    { headers: options.headers }
  );

  const target = await response.json();

  return target;
};

export const fetchById = async id => {
  const response = await fetch(
    `https://musclewiki.p.rapidapi.com/exercises/${id}`,
    { headers: options.headers }
  );

  const dataId = await response.json();

  return dataId;
};

export const fetchByName = async name => {
  const response = await fetch(
    `https://musclewiki.p.rapidapi.com/exercises?name=${name}`,
    { headers: options.headers }
  );

  const dataName = await response.json();

  return dataName;
};
