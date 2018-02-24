import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ActionsRoutingModule } from './actions-routing.module';

import { ActionsComponent } from './actions.component';

@NgModule({
  imports: [ThemeModule, ActionsRoutingModule],
  declarations: [ActionsComponent],
  providers: []
})
export class ActionsModule {}
