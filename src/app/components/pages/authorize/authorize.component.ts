import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css'],
})
export class AuthorizeComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
