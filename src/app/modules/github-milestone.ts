export interface GithubIssues {
  // login: string;
  state?: string;     // default open
  sort?: string;      // default due_on
  direction?: string; // default asc
  title?: string;
  creator?: string;
  description?: string;
  id?: string;
  open_issues?: string;
  closed_issues?: string;
  due_on?: string;
  closed_at?: string;
}
