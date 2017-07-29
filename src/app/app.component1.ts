import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

/*@Component({
  selector: 'component1',
  template: `<h1> Sports Event{{gameDetails.location}} </h1>
            <form>
            <p> Sports type:<input type="text" [(ngModel)]="gameDetails.type" name="type" >{{ gameDetails.type }}</p>
            <p> Event location:<input type="text"  [(ngModel)]="gameDetails.location" name="location" >{{ gameDetails.location }} </p>
            <p> Event takes place on: <input type="date"  [(ngModel)]="gameDetails.Date">{{ gameDetails.Date }}</p>
            <p> Start time: <input type="time"  [(ngModel)]="gameDetails.startTime"> </p>
            <p> Finish time: <input type="time"  [(ngModel)]="gameDetails.finishTime"> </p>
            </form>`,
})
export class ComponentEvent {
 gameDetails = {
     type: '',
     location:'',
     Date:'',
     startTime:'',
     finishTime:''
 }
}
*/

@Component({
    selector: 'event-x',
    templateUrl: './app.ComponentFormEvent.html'
})
export class ComponentFormEvent {
    eventData = new FormGroup({
        type:new FormControl()
});
 }




