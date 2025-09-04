import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";

import { HasingService } from "src/hasing/hasing.service";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private datasource: DataSource,
    private hashService: HasingService
  ) {
    super(User, datasource.createEntityManager());
  }
  async AddUser(dto: CreateUserDto) {
    const newHashPassword = await this.hashService.hashPassword(dto.password);
    dto.password = newHashPassword
    return await this.save(dto);
  }


  async findById(regId: number) {
    return await this.findOneBy({ regId })
  }
}