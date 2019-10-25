import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Repo, Committer, PR } from './types'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  repos: Array<Repo> = [];
  committers: Array<Committer> = [];
  prs: Array<PR> = [];

  reposLoaded = false;
  resultsLoaded = false;

  baseUrl = "http://augur.osshealth.io:5000/api/unstable/"
  getRepoAPI() {
    this.http.get(this.baseUrl + 'repos').subscribe((data: Array<Repo>) => {
      for (let repo of data) {
        this.repos.push({
          repo_id: repo.repo_id,
          repo_group_id: repo.repo_group_id,
          repo_name: repo.repo_name
        });
      }
      this.reposLoaded = true;
    });
  }

  searchByRepoName(name: String): Repo {
    for (let repo of this.repos) {
      if(repo.repo_name === name) {
        return repo;
      }
    }
  }

  getCommitters(groupId: String, repoId: String) {
    this.http.get(this.baseUrl + 'repo-groups/' + groupId + '/repos/' + repoId + '/top-committers' ).subscribe(
      (data: Array<Committer>) => {
        for (let committer of data) {
          this.committers.push({
            email: committer.email,
            commits: committer.commits
          });
        }
      }
    );
  }

  getPullRequestRates(groupId: String, repoId: String) {
    this.http.get(this.baseUrl + "repo-groups/" + groupId + '/repos/' + repoId + '/pull-request-acceptance-rate').subscribe(
      (data: Array<PR>) => {
        for (let pr of data) {
          this.prs.push({
            date: pr.date,
            rate: pr.rate
          });
        }
      }
    );
  }
}
