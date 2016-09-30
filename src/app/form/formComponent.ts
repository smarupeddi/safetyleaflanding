import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
    emailValidator, matchingPasswords, passwordValidator, smallValidator
} from './validators';
import {Headers, URLSearchParams,Http, Response} from "@angular/http";



@Component({
    selector: 'form-app',
    templateUrl: 'app/form/formComponent.html',
    styleUrls: ['app/css/registrationPage.css']
})

// @Injectable()
// export class FormComponent implements OnInit

export class FormComponent
{

    registerForm: FormGroup;
    httpClient:Http;

    constructor(private formBuilder: FormBuilder, private http:Http) {
        this.httpClient = http;

        this.registerForm = formBuilder.group({
                companyName: ['', Validators.required],
                country: ['', Validators.required],
                url: ['', Validators.required],
                companyProfile: ['', Validators.required],
                employees: ['', Validators.required],
                describe: ['', Validators.required],
                workEmail: ['', Validators.compose([Validators.required,emailValidator])],
                accManager: ['', Validators.required],
                password: ['', Validators.compose([Validators.required, smallValidator])],
                repPassword: ['', Validators.required],
                phone: ['', Validators.required]
            }
            , {validator: matchingPasswords('password','repPassword')}
        );
            // {Validator: areEqual})

    }

    ngOnInit() {


    }

        submitRegistration(value: any)
            {
                console.log(value);
                var headers = new Headers();
                var accManager=value.controls.accManager.value;
                var password=value.controls.repPassword.value;
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');


                this.httpClient.get('http://localhost:8080/login?username='+accManager+'&password='+password, {
                    headers: headers
                })
                    .map(res => res.text())
                    .subscribe(data => console.log(data),
                        err => console.log(err),
                        () => console.log('Secret Quote Complete'));
                console.log(value.controls.accManager.value);


            }


}
