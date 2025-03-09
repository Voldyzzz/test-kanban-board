export type Repo = {
  owner: string;
  repository: string;
};

export type RepoData = {
  id: number;
  number: number;
  title: string;
  state: string;
  comments: number;
  updated_at: string;
  user: string;
};
