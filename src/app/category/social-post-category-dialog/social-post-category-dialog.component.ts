import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryService } from '@calvillo/api';
import { Category } from '@calvillo/api';
import { UserService } from '@calvillo/api';
import { NotifyService } from '../../shared/services/notify.service';

@Component({
  selector: 'app-social-post-dialog',
  templateUrl: './social-post-category-dialog.component.html',
  styleUrls: ['./social-post-category-dialog.component.scss']
})
export class SocialPostCategoryDialogComponent implements OnInit {
  message = '';
  linkToFacebookPublications = null;
  hours_interval = 3;
  public exist_token: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                category: Category,
              }, private dialogRef: MatDialogRef<SocialPostCategoryDialogComponent>,
              private categoryService: CategoryService,
              private userService: UserService,
              private notify: NotifyService) {
  }

  ngOnInit() {
    this.userService.getStatus().subscribe(
      response => {
        this.exist_token = response.exist_token;
      }
    )

  }

  submit() {
    const data: any = {
      hours_interval: this.hours_interval,
    };

    this.categoryService.facebookPost(this.data.category.id, data).subscribe(
      response => {
        this.message = null;
        this.linkToFacebookPublications =
          response.facebook_post_ids.map(id => 'https://www.facebook.com/calvillo.com.mx/posts/' + id);

        this.notify.success('Post publicado con éxito');
      },
      error => this.notify.serviceError(error)
    );
  }

  close() {
    this.dialogRef.close();
  }


}
