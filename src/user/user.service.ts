import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserModel} from "./user.model";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private userRepo: typeof UserModel) {
    }
    async getUser() {
        return await this.userRepo.findAll()
    }

    async create(dto: UserDto) {
        return await this.userRepo.create({...dto})
    }
}
