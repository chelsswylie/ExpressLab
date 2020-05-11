import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from '../inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
