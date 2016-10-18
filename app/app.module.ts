import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HelloComponent } from './hello.component';
import { MagazineComponent } from './magazine/magazine.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations:  [ HelloComponent , MagazineComponent],
  bootstrap:     [ HelloComponent, MagazineComponent ]
})
export class AppModule { }
