import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  groupId;
  repoId;
  public doughnut: ChartType = 'doughnut';
  public line: ChartType = 'line';
  public bar: ChartType = 'bar';
  constructor(private route: ActivatedRoute,
    private apiService: ApiService) {}

  get committers() {
    return this.apiService.committers;
  }
  get prs() {
    return this.apiService.prs;
  }
  get backlogs() {
    return this.apiService.backlogs;
  }
  get repoName() {
    return this.apiService.getRepoNameByIds(this.groupId, this.repoId);
  }
  get reposFailedToLoad() {
    return this.apiService.reposFailedToLoad;
  }
  get commitsFailedToLoad() {
    return this.apiService.commitsFailedToLoad;
  }
  get prsFailedToLoad() {
    return this.apiService.prsFailedToLoad;
  }
  get backlogFailedToLoad() {
    return this.apiService.backlogFailedToLoad;
  }
  get commitsLoaded() {
    return this.apiService.commitsLoaded;
  }
  get prsLoaded() {
    return this.apiService.prsLoaded;
  }
  get backlogLoaded() {
    return this.apiService.backlogLoaded;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.groupId = this.route.snapshot.params.gid;
      this.repoId = this.route.snapshot.params.rid;
      this.apiService.getCommitters(this.groupId, this.repoId);
      this.apiService.getPullRequestRates(this.groupId, this.repoId);
      this.apiService.getBacklog(this.groupId, this.repoId);
    });

  }

  public get committerData(): MultiDataSet {
    let data: MultiDataSet = [];
    let tmp: number[] = [];
    for (let committer of this.committers) {
      tmp.push(committer.commits.valueOf());
    }
    data.push(tmp);
    return data;
  }
  public get committerLabels(): Label[] {
    let tmp: Label[] = [];
    for (let committer of this.committers) {
      tmp.push(committer.email.toString() + " - " + committer.commits.toString() + " commits");
    }
    return tmp;
  }
  public get prData(): MultiDataSet {
    let data: MultiDataSet = [];
    let tmp: number[] = [];
    for (let pr of this.prs) {
      tmp.push(pr.rate.valueOf());
    }
    data.push(tmp);
    return data;
  }
  public get prLabels(): Label[] {
    let tmp: string[] = [];
    for (let pr of this.prs) {
      tmp.push(pr.date.split("T")[0].toString());
    }
    return tmp;
  }

}
