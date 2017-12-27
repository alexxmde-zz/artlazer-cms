import { post } from './request';

export default async (user) => {
  const endpoint = '/authentication';
  const res = await post(endpoint, user);

  return res;
};
