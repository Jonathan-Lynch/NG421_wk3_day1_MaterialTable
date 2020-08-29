import { Injectable } from '@angular/core';
import { IPhilosophers } from '../interfaces/iphilosophers';
import { PHILOSOPHERS_OF_HISTORY } from '../data/philosophers-data';

@Injectable({
    providedIn: 'root'
  })
  export class PhilosophersService {

    members: IPhilosophers[] = [];
  
    constructor() {
      this.members = PHILOSOPHERS_OF_HISTORY;
    }
  
    getMembers(): IPhilosophers[] {
      return this.members;
    }
  }
