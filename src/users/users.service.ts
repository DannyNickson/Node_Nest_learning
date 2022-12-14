import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from './../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepositiry: typeof User,private roleService:RolesService) {}

  async createUser(dto:CreateUserDto) {
    const user = await this.userRepositiry.create(dto);
    const role = await this.roleService.getRoleByValue("USER");
    await user.$set('role',[role.id])
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepositiry.findAll({include:{all:true}});
    return users;
  }
}
