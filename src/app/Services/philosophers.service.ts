import { Injectable } from '@angular/core'
import { IPhilosophers } from '../interfaces/iphilosophers';
import { PHILOSOPHERS_OF_HISTORY } from '../data/philosophers-data';

@Injectable({
  providedIn: 'root'
})
export class PhilosophersService {

  philosopherThinkers: IPhilosophers[] = [];

  constructor() { 
    this.philosopherThinkers = PHILOSOPHERS_OF_HISTORY;
  }

  getPhilosophers(): IPhilosophers[] {
    return this.philosopherThinkers;
  }
}
