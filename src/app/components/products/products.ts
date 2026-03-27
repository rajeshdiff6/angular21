import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-products',
    templateUrl: './products.html'
})
export class ProductsComponent {
    activatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            alert(params['categoryId']);
            alert(params['id'])
        })
    }
}