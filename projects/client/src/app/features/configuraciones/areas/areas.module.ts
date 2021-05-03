import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AreasPageComponent } from './pages/areas-page/areas-page.component';
import { AreasRoutingModule } from './areas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiHintControllerModule,
  TuiHintModule,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiFieldErrorModule,
  TuiInputModule,
  TuiIslandModule,
} from '@taiga-ui/kit';

@NgModule({
  declarations: [AreasPageComponent],
  imports: [
    CommonModule,

    AreasRoutingModule,
    ReactiveFormsModule,
    TuiPrimitiveTextfieldModule,
    TuiHintModule,
    TuiFieldErrorModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHintControllerModule,
    TuiIslandModule,
    TuiButtonModule,
  ],
})
export class AreasModule {}
