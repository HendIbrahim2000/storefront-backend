/* eslint-disable no-undef */
import { UserStore, User, Auth } from "../../src/models/user";

const user = new UserStore();

describe('User Model', () => {

  it('should create a user with auth to true using create method', async () => {
    const result: Auth = await user.create({
      username: 'testUser',
      password: 'thisismeenow2020#'
    });
    expect(result.auth).toEqual(true);
    expect(result.token).toBeDefined();
  });
  it('should return all users using index method', async () => {
    const result: User[] = await user.index();
    expect(result).toHaveSize(1);
    expect(result[0].id).toEqual(2);
    expect(result[0].username).toEqual('kevin');
    expect(result[0].password).not.toEqual('thisismeenow2020#');
  });
});

