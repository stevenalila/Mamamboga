import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProductsService } from '../../services/products.service';
// Import Models
import { Products } from '../../domain/mamamboga_db/products';

// START - USED SERVICES
/**
* ProductsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProductsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Products
 * @class ProductsListComponent
 */
@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    list: Products[];
    search: any = {};
    idSelected: string;
    constructor(
        private productsService: ProductsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.productsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Products to remove
     *
     * @param {string} id Id of the Products to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Products
     */
    deleteItem() {
        this.productsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
