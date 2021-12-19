import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { databaseProvider } from "../providers/database.provider";
import { TerminusModule } from "@nestjs/terminus";
import { HealthController } from "./health/controllers/health.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [...databaseProvider],
  exports: [...databaseProvider]
})
export class ApiModule {
}
