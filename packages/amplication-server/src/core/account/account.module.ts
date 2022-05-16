import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountService } from './account.service';
import { PasswordService } from './password.service';
import { PrismaModule } from 'nestjs-prisma';
import { AccountResolver } from './account.resolver';
import { PermissionsModule } from '../permissions/permissions.module';
import { SegmentAnalyticsModule } from 'src/services/segmentAnalytics/segmentAnalytics.module';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    PermissionsModule,
    SegmentAnalyticsModule
  ],
  providers: [AccountService, PasswordService, AccountResolver],
  exports: [AccountService, PasswordService, AccountResolver]
})
export class AccountModule {}
