import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatButtonModule, MatToolbarModule } from '@angular/material';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatToolbarModule,
  MatRadioModule]

@NgModule({
  
  imports: [
    CommonModule,
    ...MATERIAL
    
  ],
  exports: MATERIAL,
  declarations: []
})
export class MaterialModule { }
