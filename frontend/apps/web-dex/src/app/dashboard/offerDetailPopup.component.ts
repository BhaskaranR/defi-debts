import { Component } from '@angular/core';

@Component({
    selector: 'offer-details',
    template: `<a (click)="onClick()" >Detail</a>`
})
export class OfferDetailPopupComponent {

    private params: any;

    agInit(params): void {
        this.params = params;
    }

    onClick(){
        alert('click!');
    }
}