import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserDto} from "./dto/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll() {
        return this.userService.getUser()
    }

    @Post()
    create(@Body() dto: UserDto) {
        return this.userService.create(dto)
    }
}
