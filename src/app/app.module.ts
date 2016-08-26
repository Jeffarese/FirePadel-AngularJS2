import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { CourtComponent } from './court/court.component';
import { MdToolbarModule } from '@angular2-material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    CourtComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
