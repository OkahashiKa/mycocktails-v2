import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CocktailDetailDialogData } from 'src/app/components/search-user-cocktails/search-user-cocktails.component';

@Component({
  selector: 'app-cocktail-detail-dialog',
  templateUrl: './cocktail-detail-dialog.component.html',
  styleUrls: ['./cocktail-detail-dialog.component.css'],
})
export class CocktailDetailDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CocktailDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CocktailDetailDialogData
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
