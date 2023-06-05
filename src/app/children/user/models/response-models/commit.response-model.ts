/* eslint-disable @typescript-eslint/no-explicit-any */
interface CommitResponse {
    id: string;
    stats: Stats;
    project_id: number;
}

export interface Stats {
    additions: number;
    deletions: number;
    total: number;
}

export default CommitResponse;
