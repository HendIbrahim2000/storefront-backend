import jsonwebtoken from 'jsonwebtoken';

export const userToken: Function = (id: number): string => {
  return jsonwebtoken.sign(id.toString(), process.env.JWT_SECRET as string);
};
