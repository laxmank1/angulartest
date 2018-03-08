import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";

import { FormsModule, NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {



  constructor(private DataService: DataService) { }

  ngOnInit() {
  }

  //POST
  // childFirstName: string;
  // childLastName: string;
  //  dob: string;

  // parentFatherName: string;
  // parentMotherName: string;
  // parentMobile: string;
  // parentEmailId: string;

  // guardianFirstName: string;
  // guardianLastName: string;
  // guardianRelation: string;
  // guardianMobile: string;
  // guardianEmailId: string;

  // address: string;
  // country: string;
  // state: string;
  // city: string;
  // postalCode: string;

  // enrolledclass: string;
  // enrolledRoom: string;
  // enrolledStartDate: string;
  enrolledEndDate: string;

  // additionalDetails: string;


  registerStudent: any;


  public addStudent: Student[];


  onAddStudent(f: NgForm) {

    this.registerStudent = f.value;


    // this.registerStudent.DOB = f.value.DOB.year + '/' + f.value.DOB.month + '/' + f.value.DOB.day;
    // this.registerStudent.EnrolledStartDate = f.value.EnrolledStartDate.year + '/' + f.value.EnrolledStartDate.month + '/' + f.value.EnrolledStartDate.day;
    // this.registerStudent.EnrolledEndDate = f.value.EnrolledEndDate.year + '/' + f.value.EnrolledEndDate.month + '/' + f.value.EnrolledEndDate.day;


    //TODO: change date format from object to dateTime UTC
    //note: this.registerStudent.EnrolledEndDate(EnrolledEndDate->>name in html)
    var DOBDay = new Date(f.value.DOB.year + '/' + f.value.DOB.month + '/' + f.value.DOB.day);
    this.registerStudent.DOB = (moment.utc(DOBDay)).format();
    console.log(this.registerStudent.DOB);

    var startDay = new Date(f.value.EnrolledStartDate.year + '/' + f.value.EnrolledStartDate.month + '/' + f.value.EnrolledStartDate.day);
    this.registerStudent.EnrolledStartDate = (moment.utc(startDay)).format();
    console.log(this.registerStudent.EnrolledStartDate);

    var endDay = new Date(f.value.EnrolledEndDate.year + '/' + f.value.EnrolledEndDate.month + '/' + f.value.EnrolledEndDate.day);
    this.registerStudent.EnrolledEndDate = (moment.utc(endDay)).format();
    console.log(this.registerStudent.EnrolledEndDate);



//  //DATE TRIAL
//       var x = new Date(DOBDay);
//       var y = moment.utc(x);

//       console.log(y.utc().toDate());



    //POST from api student
    //SERVICE call
    this.DataService.postStudent(this.registerStudent).subscribe((student) => {
      console.log(student);

      this.addStudent = student;
    });



    // var day = new Date(f.value.EnrolledEndDate.year + '/' + f.value.EnrolledEndDate.month + '/' + f.value.EnrolledEndDate.day);

    // var dayWrapper = (moment.utc(day)).format();

    // console.log(dayWrapper);


    console.log(f.value);
    console.log(this.registerStudent.EnrolledEndDate);

    // this.enrolledEndDate = f.value.EnrolledEndDate.year + '/' + f.value.EnrolledEndDate.month + '/' + f.value.EnrolledEndDate.day;
    // console.log(this.enrolledEndDate);

    //TODO: Refresh Page
    // window.location.reload();

  }


}

interface Student {
  //id: number,
  childFirstName: string,
  childLastName: string,
  dob: string,

  parentFatherName: string,
  parentMotherName: string,
  parentMobile: string,
  parentEmailId: string,

  guardianFirstName: string,
  guardianLastName: string,
  guardianRelation: string,
  guardianMobile: string,
  guardianEmailId: string,

  address: string,
  country: string,
  state: string,
  city: string,
  postalCode: string,

  enrolledclass: string,
  enrolledRoom: string,
  enrolledStartDate: string,
  enrolledEndDate: string,

  additionalDetails: string
}