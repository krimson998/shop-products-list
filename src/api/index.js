import axios from 'axios';
export const getFirstList = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    /* Получение первых 50 продуктов из всего массива */
    const firstList = response.data.slice(0, 50);
    return firstList;
  } catch (e) {
    throw new Error(e);
  }
};
export const getNextList = async (startListItem, endListItem) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    /* Получение следующих 50 продуктов из массива */
    const newList = await response.data.slice(startListItem, endListItem);
    return newList;
  } catch (e) {
    throw new Error(e);
  }
};

export const buyMockupRequest = async () => {
  const res = await axios.get('https://reqres.in/api/products/3').catch((e) => {
    return e;
  });

  console.log(res.data);
};
