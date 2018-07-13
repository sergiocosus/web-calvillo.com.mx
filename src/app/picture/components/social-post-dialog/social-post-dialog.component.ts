import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../../modules/api/services/picture.service';
import { Picture } from '../../../modules/api/models/picture.model';
import { Category } from '../../../modules/api/models/category.model';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../../modules/api/services/user.service';
import { NotifyService } from '../../../shared/services/notify.service';

@Component({
  selector: 'app-social-post-dialog',
  templateUrl: './social-post-dialog.component.html',
  styleUrls: ['./social-post-dialog.component.scss']
})
export class SocialPostDialogComponent implements OnInit {
  message = '';
  linkToFacebookPublication = null;
  delay = false;
  scheduled_publish_time;
  public exist_token: any;
  private picture: Picture;
  private category: Category;

  constructor(private dialogRef: MatDialogRef<SocialPostDialogComponent>,
              private pictureService: PictureService,
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

  init(category: Category, picture: Picture) {
    this.category = category;
    this.picture = picture;
  }

  submit() {
    const data: any = {
      message: this.message,
    };

    if (this.delay) {
      data.scheduled_publish_time = this.scheduled_publish_time;
    }


    this.pictureService.facebookPost(this.category.id, this.picture.id, data).subscribe(
      response => {
        this.message = null;
        this.delay = false;
        this.linkToFacebookPublication = 'https://www.facebook.com/calvillo.com.mx/posts/' + response.facebook_post_id;
        this.notify.success('Post publicado con éxito');
      },
      error => this.notify.serviceError(error)
    );
  }

  close() {
    this.dialogRef.close();
  }


}
