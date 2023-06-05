export interface EventBrief {
    project_id: number;
    commit_hex_number: string;
    commit_count: number;
}

export interface CodeLinesStatistic {
    sumOfAdditions: number;
    sumOfDeletions: number;
}
