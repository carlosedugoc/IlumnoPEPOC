import { Component, OnInit } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../../app.config';
import { IlumnoService } from "./ilumno.service";

@Component({
    selector: 'app-ilumno',
    templateUrl: 'ilumno.component.html',
    providers: [IlumnoService]
})
export class IlumnoComponent implements OnInit {
    url:string

    constructor(private is:IlumnoService) {
        console.log('ok2')
        this.url= is.gerURL()
        console.log(this.url)
     }

    ngOnInit() { 

    }

}
