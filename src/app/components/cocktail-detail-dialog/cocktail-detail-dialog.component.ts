import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CocktailDetailDialogData } from '@/components/search-user-cocktails/search-user-cocktails.component';
import { CocktailsService } from '@/services/cocktails.service';

@Component({
  selector: 'app-cocktail-detail-dialog',
  templateUrl: './cocktail-detail-dialog.component.html',
  styleUrls: ['./cocktail-detail-dialog.component.css'],
})
export class CocktailDetailDialogComponent implements OnInit {
  public readonly nonImageURL: string =
    'https://erpbbaxjnffnjoheuupq.supabase.co/storage/v1/object/public/images/noimage-760x460.png?t=2023-02-02T23%3A16%3A19.502Z';

  constructor(
    public dialogRef: MatDialogRef<CocktailDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CocktailDetailDialogData,
    private cocktailService: CocktailsService
  ) {}

  ngOnInit(): void {
    console.log(this.cocktailService.getCocktail(this.data.cocktailId));
  }
}
