# Paginacja

<p>Paginacja to proces dzielenia dużej ilości zawartośc na mniejsze porcje, w celu ułatwienia nawigacji i lepszej organizacji treści. Każda strona zawiera określoną liczbę elementów, np.: wyników wyszukiwania lub artykułów, a użytkownik może poruszać się między nimi, klikając na przyciski lub odnośniki, które prowadzą do kolejnych stron.</p>

 
<br/> 

# Instalacja ngx-Pagination

<br/>
 
### 1. Zainstaluj 'ngx-pagination' z NPM:

```sh
npm install ngx-pagination
```
 <br/>
 
### 2. Zaimportuj moduł 'ngxPaginationModule' do pliku App.module.ts
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- zaimportuj moduł

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxPaginationModule // <-- dołącz go do swojego modułu aplikacji
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
 <br/>

### 3. Dodaj pagination-controls oraz pipe do *ngFor'a w pliku HTML
```html

<pagination-controls
  (pageChange)="onChangePage($event)"
  previousLabel="Poprzedni"
  nextLabel="Następny"
></pagination-controls>

<div *ngFor="let item of products | paginate : { itemsPerPage: 10, currentPage: page }">
    your code...  
</div>
```

<br/>

### 4. Stwórz pole 'page' oraz metode do zmiany strony w pliku nazwa-component.ts

```ts

page: number = 1;

onChangePage(event: any) {
  this.page = event;
}
```
