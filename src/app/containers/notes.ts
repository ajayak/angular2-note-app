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
                    <note-card 
                        [note] = "note"
                        *ngFor="let note of notes; let i = index"
                        (checked)="onNoteChecked(i)"
                    ></note-card>
                </div>
            </div>
        </div>
    `
})
export class NotesContainer {
    notes = [
        { title: 'This is a note', value: 'My first note', color: 'cyan' },
        { title: 'This is another note', value: 'Eat food', color: 'green' },
        { title: 'This is insane', value: 'Walk doggy', color: 'yellow' }
    ];

    onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }
}