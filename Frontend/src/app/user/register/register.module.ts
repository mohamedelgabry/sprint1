import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ThemeModule, RegisterRoutingModule],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule {}
