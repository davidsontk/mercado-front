import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(loginRoutes)
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
    bootstrap: [LoginComponent]
    
})
export class LoginModule { }
