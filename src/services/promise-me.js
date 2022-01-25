/**
 * TODO: write a fetch request using .then()
 * TODO: write a fetch request using async await 
//  */

export const getAnimeList = async () => {
  const respone = await fetch(
    'https://api.jikan.moe/v4/anime?q=dragon ball&sfw'
  );
  const animeData = await respone.json();
  console.log('inside the fetch', animeData.data);
};

export const getAnimeListThen = () => {
  return fetch('https://api.jikan.moe/v4/anime?q=dragon ball&sfw').then(
    (data) =>
      data.json().then((animeData) => console.log('then data', animeData.data))
  );
};

export const getPinballData = async () => {
  const respone = await fetch(
    'https://ponball.herokuapp.com/api/v1/machines?limit=20'
  );
  const temp = await respone.json();

  const newData = temp.map((item) => {
    return { Name: item.title, date: item.date };
  });
  console.log('pinball', newData);
};

export const getPinballDataThen = () => {
  return fetch('https://ponball.herokuapp.com/api/v1/machines?limit=20').then(
    (data) =>
      data.json().then((response) => console.log('pin ball then', response))
  );
};
