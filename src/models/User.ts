import { UserPermissions } from './Enums';

export default class User {
  public constructor(
    public name: string,
    public email: string,
    public permissions: UserPermissions = UserPermissions.None,
    public id: number | null = null
  ) {}
};
