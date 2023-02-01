import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from '@/pages/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { SearchUserCocktailsComponent } from '@/components/search-user-cocktails/search-user-cocktails.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ManagementMaterialsComponent } from '@/pages/management-materials/management-materials.component';
import { MaterialState } from '@/stores/materials/materials.state';
import { HttpClientModule } from '@angular/common/http';
import { CocktailState } from '@/stores/cocktails/cocktails.state';
import { CocktailDetailDialogComponent } from '@/components/cocktail-detail-dialog/cocktail-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchUserCocktailsComponent,
    ManagementMaterialsComponent,
    CocktailDetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    NgxsModule.forRoot([MaterialState, CocktailState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
