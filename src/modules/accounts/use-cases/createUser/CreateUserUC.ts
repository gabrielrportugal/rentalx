import { ICreateUserDTO } from '@accounts/dtos/ICreateUserDTO';
import { User } from '@accounts/entities/User';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { hash } from 'bcryptjs';
import { AppError } from 'src/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserUC {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    driver_license,
    email,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    return this.usersRepository.create({
      name,
      password: passwordHash,
      driver_license,
      email,
    });
  }
}

export { CreateUserUC };
