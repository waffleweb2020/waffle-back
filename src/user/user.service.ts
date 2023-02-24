import {HttpException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserModel} from "./user.model";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private userRepo: typeof UserModel) {
    }
    async getUser() {
        try {
            return await this.userRepo.findAll({include: {all:true}})
        } catch (e) {
            return e.message
        }
    }

    async create(dto: UserDto) {
        return await this.userRepo.create({...dto})
    }
}
