export interface GithubIssue {
  url?: string;
  id?: string;
  number?: number;
  title?: string;
  user?: string;
  label?: any;
  assignee: string;
  assignees?: any;
  milestone?: string;
  state?: string;
}
