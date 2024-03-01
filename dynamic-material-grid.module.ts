import { DynamicMaterialGridComponent } from './dynamic-material-grid/dynamic-material-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule, MatLineModule, MatNativeDateModule, MatOptionModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs'
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    DynamicMaterialGridComponent
  ],
  imports: [
    CommonModule, FormsModule,  MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatCommonModule, MatLineModule, MatNativeDateModule, MatOptionModule, MatPseudoCheckboxModule, MatRippleModule, MatSortModule, MatIconModule, MatTooltipModule, MatPaginatorModule, MatTableModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatTabsModule, MatDialogModule, ScrollingModule, MatDialogModule, ScrollingModule, NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    DynamicMaterialGridComponent
  ]
})
export class DynamicMaterialGridModule { }
