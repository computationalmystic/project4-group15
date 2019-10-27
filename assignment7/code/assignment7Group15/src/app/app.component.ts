import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MatAutocomplete } from '@angular/material/autocomplete'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Repo } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7Group15';
  filteredRepos: Observable<Repo[]>;

  repo: FormControl = new FormControl();
  constructor(private apiService: ApiService,
              private router: Router){}

  get reposLoaded() {
    return this.apiService.reposLoaded;
  }
  get repoNames() {
    return this.apiService.repoNames;
  }
  get repos () {
    return this.apiService.repos;
  }
  ngOnInit() {
    this.apiService.getRepoAPI();
    this.filteredRepos = this.repo.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  search() {
    let repo = this.apiService.searchByRepoName(this.repo.value);
    this.router.navigate(['/results/' + repo.repo_group_id + "/" + repo.repo_id]);
    this.apiService.reset();
  }

  private _filter(value: string): Repo[] {
    const filterValue = value.toLowerCase();
    return this.repos.filter(option => option.repo_name.toLowerCase().includes(filterValue));
  }
}
