import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App, providers, routes } from './app';
import { Main, NotesContainer, AboutComponent } from './app/containers';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './app/ui';

@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        NotesContainer,
        NoteCreator,
        ColorPicker,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    bootstrap: [App],
    providers
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);