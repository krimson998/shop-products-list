import axios from 'axios';
export const getFirstList = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    /* Получение первых 50 продуктов из всего массива */
    const firstList = response.data.slice(0, 50);
    return firstList;
  } catch (error) {
    throw new Error(error);
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
  } catch (error) {
    throw new Error(error);
  }
};
