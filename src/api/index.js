import axios from 'axios';

export const buyMockupRequest = async () => {
  const res = await axios.get('https://reqres.in/api/products/3').catch((e) => {
    return e;
  });
  console.log(res.data);
};
