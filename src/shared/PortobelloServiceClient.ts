import axios from 'axios';

export default class PortobelloServiceClient {
  public constructor(
    private readonly baseUrl: string = 'http://localhost:8080/api'
  ) {}

  public async getAllUsers(onlyActive = true): Promise<Record<string, unknown>[]> {
    return <Record<string, unknown>[]>((await axios.get(
      `${this.baseUrl}/user/get-all`,
      {
        params: {
          'only-active': onlyActive
        }
      }
    )).data);
  }
}
