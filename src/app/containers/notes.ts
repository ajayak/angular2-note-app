import { Component } from '@angular/core';

@Component({
    selector: 'note-container',
    styles: [`
    .notes {
        padding-top: 50px;
    }
    .creator {
        margin-bottom: 40px; 
    }
    `],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                note creator here
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card [note] = "note"></note-card>
                </div>
            </div>
        </div>
    `
})
export class NotesContainer {
    note = {
        title: 'This is a note',
        value: 'My first note',
        color: 'cyan'
    };
}