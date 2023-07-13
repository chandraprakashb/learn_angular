
import {Component} from '@angular/core'

@Component({
    selector:"app-success-alert",
    template:`
    <div class="card mb-2 mt-5">
        <div class="card-header bg-success text-white">
           <h3> Assignment Completed Successfully !</h3>
        </div>
        <div class="card-body">
            <h2 class="text-center text-success">Congrates !</h2>
            <h6 class="text-center">Assignment have been completed by me !</h6>
        </div>
    </div>
    `,
    styles:[``]
})
export class SuccessAlert{

}