import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPhilosophers } from '../app/interfaces/iphilosophers';
import { PhilosophersService } from '../app/services/philosophers.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'areaLived', 'ageOfDeath', 'areTheyChristian', 'sumOfBeliefs', 'birthDate'];
  dataSource: MatTableDataSource<IPhilosophers>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private PhilosophersService: PhilosophersService){}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.PhilosophersService.getPhilosophers());
    this.dataSource.sort = this.sort;
  }
}
