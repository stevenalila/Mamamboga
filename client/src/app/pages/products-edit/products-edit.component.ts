// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProductsService } from '../../services/products.service';
// Import Models
import { Products } from '../../domain/mamamboga_db/products';

// START - USED SERVICES
/**
* ProductsService.create
*	@description CRUD ACTION create
*
* ProductsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ProductsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Products
 */
@Component({
    selector: 'app-products-edit',
    templateUrl: 'products-edit.component.html',
    styleUrls: ['products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
    item: Products;
    model: Products;
    formValid: Boolean;

    constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Products();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.productsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Products
     *
     * @param {boolean} formValid Form validity check
     * @param Products item Products to save
     */
    save(formValid: boolean, item: Products): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.productsService.update(item).subscribe(data => this.goBack());
            } else {
                this.productsService.create(item).subscribe(data => this.goBack());
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



