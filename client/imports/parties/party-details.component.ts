import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { Parties } from '../../../both/collections/parties.collection';
import { Tracker } from 'meteor/tracker';

import template from './party-details.component.html';
 
@Component({
  selector: 'party-details',
  template
})
export class PartyDetailsComponent implements OnInit {
  partyId: string;
  party: any;
 
  constructor(private route: ActivatedRoute) {}
   ngOnInit() {
    this.route.params
      .map(params => params['partyId'])
      .subscribe(partyId => {
        this.partyId = partyId;
 
        Tracker.autorun(() => {
          this.ngZone.run(() => {
            this.party = Parties.findOne(this.partyId);
          });
        });;
      });
  }
}