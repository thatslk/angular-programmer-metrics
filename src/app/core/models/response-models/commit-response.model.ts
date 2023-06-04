/* eslint-disable @typescript-eslint/no-explicit-any */
interface Commit {
    id: string;
    short_id: string;
    created_at: string;
    parent_ids: any[];
    title: string;
    message: string;
    author_name: string;
    author_email: string;
    authored_date: string;
    committer_name: string;
    committer_email: string;
    committed_date: string;
    trailers: Trailers;
    web_url: string;
    stats: Stats;
    status: any;
    project_id: number;
    last_pipeline: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Trailers {}

interface Stats {
    additions: number;
    deletions: number;
    total: number;
}

export default Commit;
