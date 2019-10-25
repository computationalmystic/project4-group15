import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  groupId;
  repoId;
  constructor(private route: ActivatedRoute,
    private apiService: ApiService) {
    
     }

  get committers() {
    return this.apiService.committers;
  }
  get prs() {
    return this.apiService.prs;
  }
  get backlogs() {
    return this.apiService.backlogs;
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

}
