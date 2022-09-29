import { ICreateUserDTO } from '@accounts/dtos/ICreateUserDTO';
import { User } from '@accounts/entities/User';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
    });

    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne(id);
  }
}

export { UsersRepository };
