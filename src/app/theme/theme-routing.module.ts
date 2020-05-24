import { ParentBodyComponent } from './parent-body/parent-body.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: ParentBodyComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ThemeRoutingModule {}
