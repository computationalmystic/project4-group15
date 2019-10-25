import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MatAutocomplete } from '@angular/material/autocomplete'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7Group15';

  repo: FormControl = new FormControl();
  constructor(private apiService: ApiService,
              private router: Router){}

  get repos() {
    return this.apiService.repos;
  }
  get reposLoaded() {
    return this.apiService.reposLoaded;
  }
  ngOnInit() {
    this.apiService.getRepoAPI();
  }
  search() {
    let repo = this.apiService.searchByRepoName(this.repo.value);
    console.dir(repo);
    this.router.navigate(['/results/' + repo.repo_group_id + "/" + repo.repo_id]);
  }
}
