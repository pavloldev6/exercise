import { NgModule } from '@angular/core';
import { CatDetailComponent } from './cat-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatYearsPipe } from './cat-years.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CatDetailComponent, CatYearsPipe],
    exports: [CatDetailComponent]
})
export class CatModule {}