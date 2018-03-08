import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import * as _ from "lodash";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  // records: Array<any>;
  //   isDesc: boolean = false;
  //   column: string = 'Category';
  //   direction: number;

  data: any[];
  // companyName: any;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "category";
  public sortOrder = "asc";
  constructor(private DataService: DataService) { }
  ngOnInit() {


    this.DataService.getData().subscribe((posts) => {
      console.log(posts);
      this.data = posts;
      console.log(this.data);
    });

    // //GET BY ID from api Student
    // this.DataService.getClassById(1).subscribe((studentsById) => {
    //   console.log(studentsById);
    //   this.studentsById = studentsById;

    // });

  }

  //Prajakta
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.category.length;
  }

  //Alpit
  public removeItem(item: any) {

    console.log("Remove: ", item.id);
    //GET BY ID from api Student
    this.DataService.deleteClassById(item.id).subscribe((classDeleteById) => {
      console.log(classDeleteById);
      this.data = _.filter(this.data, (elem) => elem != item);

    });
    console.log("Remove: ", item.id);

  }

}
  //   sort(property){
  //   this.isDesc = !this.isDesc; //change the direction    
  //   this.column = property;
  //   this.direction = this.isDesc ? 1 : -1;
  // };


