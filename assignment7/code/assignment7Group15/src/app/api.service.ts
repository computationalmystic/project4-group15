import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Repo, Committer, PR, Backlog } from './types'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  repos: Array<Repo> = [];
  committers: Array<Committer> = [];
  prs: Array<PR> = [];
  backlogs: Array<Backlog> = [];
  repoNames: Array<string> = [];

  reposLoaded = false;
  commitsLoaded = false;
  prsLoaded = false;
  backlogLoaded = false;

  reposFailedToLoad = false;
  commitsFailedToLoad = false;
  prsFailedToLoad = false;
  backlogFailedToLoad = false;


  baseUrl = "http://augur.osshealth.io:5000/api/unstable/"
  getRepoAPI() {
    this.http.get(this.baseUrl + 'repos').subscribe((data: Array<Repo>) => {
      for (let repo of data) {
        this.repos.push({
          repo_id: repo.repo_id,
          repo_group_id: repo.repo_group_id,
          repo_name: repo.repo_name
        });
        this.repoNames.push(repo.repo_name.toString());
      }
      this.reposLoaded = true;
    }, (error) => {
      this.reposFailedToLoad = true;
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
        this.commitsLoaded = true;
      }, (error) => {
        this.commitsFailedToLoad = true;
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
        this.prsLoaded = true;
      }, (error) => {
        this.prsFailedToLoad = true;
      }
    );
  }

  getBacklog(groupId: String, repoId: String) {
    this.http.get(this.baseUrl + "repo-groups/" + groupId + "/repos/" + repoId + '/issue-backlog').subscribe(
      (data: Array<Backlog>) => {
        for (let backlog of data) {
          this.backlogs.push({
            issue_backlog: backlog.issue_backlog
          });
        }
        this.backlogLoaded = true;
      }, (error) => {
        this.backlogFailedToLoad = true;
      }
    );
  }

  reset() {
    this.committers = [];
    this.prs = [];
    this.backlogs = [];
    this.commitsFailedToLoad = false;
    this.prsFailedToLoad = false;
    this.backlogFailedToLoad = false;
    this.commitsLoaded = false;
    this.prsLoaded = false;
    this.backlogLoaded = false;
  }

  getRepoNameByIds(gid: String, rid: String) : String {
    for (let repo of this.repos) {
      if(repo.repo_group_id == gid && repo.repo_id == rid) return repo.repo_name;
    }
    return "...";
  }
}
