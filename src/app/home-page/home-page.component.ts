import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  repos: any;
  profile: any;
  rForm!: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) { 
    this.rForm = this.fb.group({
      username: [null],
    })
  }

  ngOnInit(): void {}
  onSubmit = () => {
    const username = this.rForm.value.username;
    this.dataService.getUser(username).subscribe((profile: any) => {
      console.log(profile)
      this.profile = profile;
    })
    this.dataService.getRepos(username).subscribe((repos: any) => {
      console.log(repos)
      this.repos = repos;
    })
  }
}
