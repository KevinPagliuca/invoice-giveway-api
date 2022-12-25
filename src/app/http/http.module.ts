import { Module } from '@nestjs/common';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, InvoicesModule],
  providers: [],
  controllers: [],
})
export class HttpModule {}
