import { ICreateUserDTO } from '@accounts/dtos/ICreateUserDTO';
import { User } from '@accounts/entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}

export { IUsersRepository };
