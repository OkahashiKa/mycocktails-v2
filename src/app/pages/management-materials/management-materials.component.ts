import { Component, OnInit } from '@angular/core';
import { MaterialModel } from '@/models/material/materialModel';

@Component({
  selector: 'app-management-materials',
  templateUrl: './management-materials.component.html',
  styleUrls: ['./management-materials.component.scss'],
})
export class ManagementMaterialsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'category', 'edit'];

  constructor() {}

  ngOnInit(): void {
    this.getMaterialList();
  }

  getMaterialList(): void {}

  updateMaterial(id: number): void {
    // TODO: implement update materials.
  }

  deleteMaterial(id: number): void {
    // TODO: implement delete materials.
  }

  createMaterial(): void {
    // TODO: implement create materials.
  }
}
