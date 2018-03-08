import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {


    //state write here only
    state: RouterStateSnapshot;
    returnUrl: string;


    fLogin: FormGroup;

    password: string = '';
    username: string = '';


    constructor(
        private loginFormBuilder: FormBuilder,
        private DataService: DataService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.fLogin = loginFormBuilder.group({

            //this name param should be equals to formControlName
            name: [null, [Validators.required]],
            password: [null, [Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(32)])]],
            'validate': ''

        });
    }

    ngOnInit() {


    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    onLogin(loginDetails) {
        this.username = loginDetails.username;
        this.password = loginDetails.password;

        console.log(loginDetails);

        //GET from api Student
        this.DataService.adminLogin(loginDetails).subscribe(
            data => {
                console.log(data);

                var a = localStorage.setItem('currentUser', JSON.stringify(data));

                if (data) {

                    //TODO: user logged in/out
                    localStorage.setItem('isLoggedin', 'true');

                    //TODO: Redirect to Dashboard    
                    this.returnUrl = this.route.snapshot.queryParams['dashboard'] || '/dashboard';
                    this.router.navigate([this.returnUrl]);
                }

            error=>{
                
            }

            });


    }

}
