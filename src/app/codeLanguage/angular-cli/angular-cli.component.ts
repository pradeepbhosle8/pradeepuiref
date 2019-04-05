import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.css']
})
export class AngularCliComponent implements OnInit {

response: HighlightResult;

angularsetupdir = `
open terminal or  node js terminal 
ng new foldername
then
? Would you like to add Angular routing? (y/N) y
then
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ http://sass-lang.com   ]
  SASS   [ http://sass-lang.com   ]
  LESS   [ http://lesscss.org     ]
  Stylus [ http://stylus-lang.com ]

  Ok
  build app take a time

  cd Foldername
  ng serve --open

  localhost:4200
`;
angularcompon = `
ng generate component componentName
Or
ng g c componentName
`;
angularcomponfile = `
create src/app/folderName/componentName.component.css
create src/app/folderName/componentName.component.html
create src/app/folderName/componentName.component.spec.ts
create src/app/folderName/componentName.component.ts
`;
angularappmoduleupdate = `
UPDATE src/app/app.module.ts
`;
angularservice = `
ng generate service serviceName
Or
ng g s serviceName
`;
angularservicefile = `
create src/app/share/serviceName.service.ts
`;
angularbootstrap = `
run project terminal

npm install bootstrap --save
npm install jquery --save
`;
angularimportfile = `
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.scss"
],
"scripts": [
  "../node_modules/jquery/dist/jquery.min.js",
  "../node_modules/bootstrap/dist/js/bootstrap.min.js",
 ]

Or
Import directly in src/style.css or src/style.scss
@import '~bootstrap/dist/css/bootstrap.min.css';
`;
angularroute = `
ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.
`;
angularroutingfile = `
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// all  Components import
import { componentName } from './file path';
import { componentName } from './file path';
import { componentName } from './file path';

const routes: Routes = [
  {path: 'nameroute', component: componentName},
  {path: 'nameroute', component: componentName}

  Or childrean eg.
  {path: 'nameroute', component: componentName,
  children: [
    {path: 'nameroute', component: componentName},
    {path: 'nameroute', component: componentName},
  ]},
  {path: 'nameroute', component: componentName}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


`;
angularmoduletsfile = `
eg.
export class Admin {
  admin_id: string;
  full_name: string;
  email_id: string;
  mobile_no: string;
  date: string;
  admin_img: string;
  username: string;
  password: string;
  gender: string;

}
`;
angularservicets = `
import { Injectable } from '@angular/core';
// http module import
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import admin module ts
import { Admin } from './admin.module';

@Injectable({
  providedIn: 'root'
  })

  export class AdminService {

    admin: Admin; // module ts call
    selectedAdminRec: Admin;  //edit record using this

    // CORS header call
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(
      private _http: Http  // Http service call
   ) { }

   // get all admin record
    getAdmin() {
    const slimUrl = 'http://localhost:8080/api/admin'; // api path call
    return this._http.get(slimUrl)
    .map((res: Response) => {
        return {status: res.status, result: res.json() };
    });
    }

    // add admin record
    addAdmin(admin: Admin) {
    const slimUrl = 'http://localhost:8080/api/admin/add';
    const data = {
    full_name: admin.full_name,
    email_id: admin.email_id,
    mobile_no: admin.mobile_no,
    date: admin.date,
    admin_img: admin.admin_img,
    username: admin.username,
    password: admin.password,
    gender: admin.gender
    };
    return this._http.post(slimUrl, data, this.options)
    .map((res: Response) => {
        return {status: res.status, result: res.json() };
    });
    }

// edit admin record
    editAdmin(admin_id, admin) {
    const slimUrl = 'http://localhost:8080/api/admin/update/' + admin.admin_id;
    const params = new HttpParams().set('admin_id', admin.admin_id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const data = {
    full_name: admin.full_name,
    email_id: admin.email_id,
    mobile_no: admin.mobile_no,
    date: admin.date,
    admin_img: admin.admin_img,
    username: admin.username,
    password: admin.password,
    gender: admin.gender,
    admin_id: admin.admin_id
    };
    return this._http.put(slimUrl, data, {params})
    .map((res: Response) => {
        res.json();
    });

    }

// delete record from admin
    deleteAdmin(admin_id: number) {
    const slimUrl = 'http://localhost:8080/api/admin/delete/' + admin_id;
    return this._http.delete(slimUrl, this.options)
    .map((res: Response ) => {
    JSON.stringify(res);
    });
    }


  }
`;
angulaComponentsfile = `
import { Component, OnInit } from '@angular/core';

// import activeroute and rout which help for redirect path
import {ActivatedRoute, Router} from '@angular/router';

import { NgForm } from '@angular/forms';

// import admin services module
import { AdminService } from './service folder path';

// import Pipe module which help for searching and logn text ..
import { Pipe, PipeTransform } from '@angular/core';

// admin ts file add
import { Admin } from '../../../../share/admin.module';

// import toaster notification mododule
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-mst',
  templateUrl: './admin-mst.component.html',
  styleUrls: ['./admin-mst.component.css'],
  providers: [AdminService] //service all
  })

  export class AdminMstComponent implements OnInit {

      admins: any ;
      regModel: any = [];
      showNew: Boolean = false;
      submitType: String = 'Save';

      constructor(
      // import services
      private _services: AdminService,
      private toastr: ToastrService
      ) { }

      ngOnInit() {
      this.resetForm();
      // push admin recoard
      this.getAdminList();
      }

      newAdd() {
      this.showNew = true;
      this.submitType = 'Save';
      }

      // get all adminlist record
      getAdminList() {
      this._services.getAdmin()
      .subscribe((res) => {
      this.admins = res.result;
      });
      }

      // reset form admin
      resetForm(form?: NgForm) {
      if ( form != null) {
      form.reset();
      }
      this._services.selectedAdminRec = {
      admin_id: null,
      full_name: '',
      email_id: '',
      mobile_no: '',
      date: '',
      admin_img: '',
      username: '',
      password: '',
      gender: ''
      };
      }

      }
`;

angularhtmlfiles = `
<div class="row">
        <div class="col-sm-12">
        <div class="card-box table-responsive">

        <!-- button add admin recoard -->
        <div class="m-b-30">
        <button id="addToTable" class="btn btn-primary waves-effect waves-light" (click)="newAdd()">Add <i class="fa fa-plus"></i></button>
        <input class="form-control pull-right w300" type="text" name="search" [(ngModel)]="filter"
                placeholder="Search" autocomplete="off">
        </div>
        <!-- button add admin recoard close -->

        <!-- table reacord admin data -->
        <table id="datatable" class="table table-striped table-bordered">
        <!-- admin recoard header -->
        <thead class="thead-light">
        <tr>
        <th>Full Name</th>
        <th>Email Id</th>
        <th>Mobile No</th>
        <th>Date</th>
        <th>Image</th>
        <th>Username</th>
        <th>Password</th>
        <th>Gender</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        </thead>
        <!-- admin recoard header close -->

        <!-- admin reacord loop -->
        <tbody>
        <tr *ngFor="let data of admins | filter:filter | paginate: { itemsPerPage: 5, currentPage: p };  let i = index">
        <td>{{data.full_name | slice:0:10}}</td>
        <td>{{data.email_id | slice:0:10}}</td>
        <td>{{data.mobile_no}}</td>
        <td>{{data.date | slice:0:10}}</td>
        <td><img class="dataadminimg" src="../../../../../assets/admin/img/{{data.admin_img}}" alt=""></td>
        <td>{{data.username}}</td>
        <td>{{data.password | slice:0:10}}</td>
        <td>{{data.gender}}</td>
        <td><a (click)="editAdminrecoard(data)"><i class="fas fa-edit"></i></a></td>
        <td><a (click)="deleteAdminrecaord(data.admin_id)"><i class="fas fa-trash-alt"></i></a> </td>
        </tr>
        </tbody>
        <!-- admin reacord loop close-->
        </table>
        <!-- table reacord admin data close -->
        <pagination-controls (pageChange)="p = $event" class="pagination_ng"></pagination-controls>
        </div>
        </div>
        </div>
        <!-- end row -->

`;
angularPOSThtmlfiles = `
<form class="PageForm" #adminRecordForm="ngForm" (ngSubmit)="onSubmit(adminRecordForm)" >
        <!-- hidden admin id     -->
        <input type="hidden"
        #admin_id="ngModel"
        id="admin_id"
        name="admin_id"
        [(ngModel)]="_services.selectedAdminRec.admin_id"
        >
        <!-- hidden admin id close-->

        <!-- input full name  -->
        <div class="form-group">
        <label for="full_name">Full Name <span>*</span></label>
        <input type="text"
        id="full_name"
        #full_name="ngModel"
        name="full_name"
        [(ngModel)]="_services.selectedAdminRec.full_name"
        class="form-control"
        required>
        <!-- input full name validation -->
        <div class="alert alert-danger" *ngIf="full_name.invalid && (full_name.dirty || full_name.touched)">
        <div  *ngIf="full_name.errors?.required">
        Full name Is require !!!
        </div>
        </div>
        <!-- input full name validation close-->
        </div>
        <!-- input full name  close-->

        <!-- input email id  -->
        <div class="form-group">
        <label for="email_id">Email Id <span>*</span></label>
        <input type="text"
        id="email_id"
        #email_id="ngModel"
        name="email_id"
        [(ngModel)]="_services.selectedAdminRec.email_id"
        class="form-control"
        required>
        <!-- input email id validation -->
        <div class="alert alert-danger" *ngIf="email_id.invalid && (email_id.dirty || email_id.touched)">
        <div  *ngIf="email_id.errors?.required">
        Email Id Is require !!!
        </div>
        </div>
        <!-- input email id validation close-->
        </div>
        <!-- input email id  close-->

        <!-- input Mobile Number id  -->
        <div class="form-group">
        <label for="mobile_no">Mobile Number<span>*</span></label>
        <input type="number"
        id="mobile_no"
        #mobile_no="ngModel"
        name="mobile_no"
        [(ngModel)]="_services.selectedAdminRec.mobile_no"
        class="form-control"
        required>
        <!-- input Mobile Number id validation -->
        <div class="alert alert-danger" *ngIf="mobile_no.invalid && (mobile_no.dirty || mobile_no.touched)">
        <div  *ngIf="mobile_no.errors?.required">
        Mobile Number Is require !!!
        </div>
        </div>
        <!-- input Mobile Number id validation close-->
        </div>
        <!-- input Mobile Number id  close-->

        <!-- input Date  -->
        <div class="form-group">
        <label for="date">Date<span>*</span></label>
        <input type="datetime-local"
        id="date"
        #date="ngModel"
        name="date"
        [(ngModel)]="_services.selectedAdminRec.date"
        class="form-control"
        required>
        <!-- input Date validation -->
        <div class="alert alert-danger" *ngIf="date.invalid && (date.dirty || date.touched)">
        <div  *ngIf="date.errors?.required">
        Date require !!!
        </div>
        </div>
        <!-- input Date validation close-->
        </div>
        <!-- input Date  close-->

        <!-- input admin_img  -->
        <div class="form-group">
        <label for="admin_img">admin_img<span>*</span></label>
        <input type="text"
        id="admin_img"
        #admin_img="ngModel"
        name="admin_img"
        [(ngModel)]="_services.selectedAdminRec.admin_img"
        class="form-control"
        required>
        <!-- input admin_img validation -->
        <div class="alert alert-danger" *ngIf="admin_img.invalid && (admin_img.dirty || admin_img.touched)">
        <div  *ngIf="admin_img.errors?.required">
        admin_img require !!!
        </div>
        </div>
        <!-- input admin_img validation close-->
        </div>
        <!-- input admin_img  close-->

        <!-- input username  -->
        <div class="form-group">
        <label for="username">username<span>*</span></label>
        <input type="text"
        id="username"
        #username="ngModel"
        name="username"
        [(ngModel)]="_services.selectedAdminRec.username"
        class="form-control"
        required>
        <!-- input username validation -->
        <div class="alert alert-danger" *ngIf="username.invalid && (username.dirty || username.touched)">
        <div  *ngIf="username.errors?.required">
        username require !!!
        </div>
        </div>
        <!-- input username validation close-->
        </div>
        <!-- input username  close-->

        <!-- input username  -->
        <div class="form-group">
        <label for="password">password<span>*</span></label>
        <input type="password"
        id="password"
        #password="ngModel"
        name="password"
        [(ngModel)]="_services.selectedAdminRec.password"
        class="form-control"
        required>
        <!-- input password validation -->
        <div class="alert alert-danger" *ngIf="password.invalid && (password.dirty || password.touched)">
        <div  *ngIf="password.errors?.required">
        password require !!!
        </div>
        </div>
        <!-- input password validation close-->
        </div>
        <!-- input password  close-->

        <!-- input username  -->
        <div class="form-group">
        <label for="gender">Gender<span>*</span></label> <br>

        <label class="radio-inline">
        <input
        type="radio"
        name="gender"
        value="m"
        id="gender"

        [(ngModel)]="_services.selectedAdminRec.gender"
        checked>Male
        </label>
        <label class="radio-inline">
        <input
        type="radio"
        name="gender"
        value="f"

        [(ngModel)]="_services.selectedAdminRec.gender">Female
        </label>

        <!-- input password validation -->
        <div class="alert alert-danger" *ngIf="password.invalid && (password.dirty || password.touched)">
        <div  *ngIf="password.errors?.required">
        password require !!!
        </div>
        </div>
        <!-- input password validation close-->
        </div>
        <!-- input password  close-->

        <!-- button save, update, reset -->
        <div class="form-actions">
        <button type="submit" class="btn btn-primary uppercase "  [disabled]="!adminRecordForm.form.valid">{{submitType}}</button>
        <button type="button" class="btn btn-success uppercase pull-right" (click)="resetForm(adminRecordForm)">Reset</button>
        </div>
        <!-- button save, update, reset -->
        </form>
`;
angularPostComponentsfile = `
import { Component, OnInit } from '@angular/core';

// import activeroute and rout which help for redirect path
import {ActivatedRoute, Router} from '@angular/router';

import { NgForm } from '@angular/forms';

// import admin services module
import { AdminService } from './service folder path';

// import Pipe module which help for searching and logn text ..
import { Pipe, PipeTransform } from '@angular/core';

// admin ts file add
import { Admin } from '../../../../share/admin.module';

// import toaster notification mododule
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-mst',
  templateUrl: './admin-mst.component.html',
  styleUrls: ['./admin-mst.component.css'],
  providers: [AdminService] //service all
  })

  export class AdminMstComponent implements OnInit {

      admins: any ;
      regModel: any = [];
      showNew: Boolean = false;
      submitType: String = 'Save';

      constructor(
      // import services
      private _services: AdminService,
      private toastr: ToastrService
      ) { }

      ngOnInit() {
      this.resetForm();
      // push admin recoard
      this.getAdminList();
      }

      newAdd() {
      this.showNew = true;
      this.submitType = 'Save';
      }

      // get all adminlist record
      getAdminList() {
      this._services.getAdmin()
      .subscribe((res) => {
      this.admins = res.result;
      });
      }

      // reset form admin
      resetForm(form?: NgForm) {
      if ( form != null) {
      form.reset();
      }
      this._services.selectedAdminRec = {
      admin_id: null,
      full_name: '',
      email_id: '',
      mobile_no: '',
      date: '',
      admin_img: '',
      username: '',
      password: '',
      gender: ''
      };
      }

      // add admin recoard
    onSubmit(form: NgForm) {
        if (form.value.admin_id == null) {
            console.log(form.value);
          this._services.addAdmin(form.value)
         .subscribe((res) => {
           this.submitType = 'Save';
           this._services.getAdmin();
           this.getAdminList();
           this.toastr.success('New Pages Record Add Sucessfully');
           this.resetForm();
           this.showNew = false;
          });
          } else {
            this._services.editAdmin(form.value.page_id, form.value)
             .subscribe((res) => {
                this._services.getAdmin();
                this.getAdminList();
             this.toastr.info('Record Update Sucessfully');
             this.resetForm();
             this.showNew = false;
           });
    }
}

      }
`;
angularPutComponentsfile = `
same as post cpmponents ts
// edit admin recaord
    editAdminrecoard(admin: Admin) {
        this.showNew = true;
        this._services.selectedAdminRec = Object.assign({}, admin);
        this.submitType = 'Update';
    }
`;

angulardeleteComponentsfile = `
same as post cpmponents ts
// delete admin recaord
    deleteAdminrecaord(admin_id: number) {
    if (confirm('Are You Sure to delete this Admin ' + admin_id) === true) {
    this._services.deleteAdmin(admin_id)
    .subscribe((res) => {
    this.getAdminList();
    this.toastr.success('Record Deleted Sucessfully');
    });
    }
    }
`;
  constructor() { }

  ngOnInit() {
  }


}
