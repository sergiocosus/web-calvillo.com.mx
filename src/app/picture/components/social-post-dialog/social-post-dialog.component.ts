import { Component, OnInit } from '@angular/core';
import {PictureService} from '../../services/picture.service';
import {Picture} from '../../picture.model';
import {Category} from '../../../category/category.model';
import {MdDialogRef} from '@angular/material';
import {UserService} from '../../../user/user.service';
import {NotifyService} from '../../../shared/services/notify.service';

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
  private picture: Picture;
  private category: Category;
  public exist_token: any;
  constructor(private dialogRef: MdDialogRef<SocialPostDialogComponent>,
              private pictureService: PictureService,
              private userService: UserService,
              private notify: NotifyService) { }

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
      }
    )
  }

  close() {
    this.dialogRef.close();
  }


}
