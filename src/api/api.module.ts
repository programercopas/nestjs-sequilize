import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { databaseProvider } from "../providers/database.provider";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [...databaseProvider],
  exports:[...databaseProvider],
})
export class ApiModule {}
