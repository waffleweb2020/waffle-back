import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModule} from "./user/user.module";
import {UserModel} from "./user/user.model";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwerty',
      database: 'waffle',
      models: [UserModel],
      autoLoadModels: true,
      synchronize: true
    }), UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
