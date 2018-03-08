import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import * as _ from "lodash";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any;
  birthDate: any;

  constructor(private DataService: DataService) { }
  ngOnInit() {

    this.DataService.getDataStudent().subscribe((posts) => {
      console.log(posts);
      this.data = posts;

      console.log(this.data);
    });
  }

  //ALpit
  public removeItem(item: any) {

    console.log("Remove: ", item.id);
    //GET BY ID from api Student
    this.DataService.deleteStudentById(item.id).subscribe((StudentDeleteById) => {
      console.log(StudentDeleteById);
      this.data = _.filter(this.data, (elem) => elem != item);
    });
    console.log("Remove: ", item.id);

  }

}
