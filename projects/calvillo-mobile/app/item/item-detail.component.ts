import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Category, CategoryService } from '@calvillo/api';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    category: Category;

    constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        this.categoryService.getByLink(id).subscribe(
            category => this.category = category
        );
    }
}
