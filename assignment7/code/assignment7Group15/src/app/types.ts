export interface Repo {
    repo_id: String,
    repo_group_id: String,
    repo_name: String
}
export interface Committer {
    email: String,
    commits: Number
}
export interface PR {
    date: String,
    rate: Number
}
export interface Backlog {
    issue_backlog: Number
}