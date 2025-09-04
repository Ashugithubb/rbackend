import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repo';

@Injectable()
export class UserService {
  constructor(private readonly userRepo:UserRepository){}
  
  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.AddUser(createUserDto);
  }
  async findOneByRegId(id: number) {
      return await this.userRepo.findById(id); 
    }

  findAll() {
    return `This action returns all user`;
  }
  

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
