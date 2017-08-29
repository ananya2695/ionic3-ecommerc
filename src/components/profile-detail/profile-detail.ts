import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProfileDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-detail',
  templateUrl: 'profile-detail.html'
})
export class ProfileDetailComponent {
  // @Input() item: any;
  text: string;

  constructor() {
    console.log('Hello ProfileDetailComponent Component');
    this.text = 'Hello World';
  }

}
