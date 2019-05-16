// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { UserService } from '../../services/user.service';
// Import Models
import { User } from '../../domain/mamamboga_db/user';

// START - USED SERVICES
/**
* UserService.create
*	@description CRUD ACTION create
*
* UserService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* UserService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a User
 */
@Component({
    selector: 'app-user-edit',
    templateUrl: 'user-edit.component.html',
    styleUrls: ['user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    item: User;
    model: User;
    formValid: Boolean;

    constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new User();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.userService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save User
     *
     * @param {boolean} formValid Form validity check
     * @param User item User to save
     */
    save(formValid: boolean, item: User): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.userService.update(item).subscribe(data => this.goBack());
            } else {
                this.userService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



