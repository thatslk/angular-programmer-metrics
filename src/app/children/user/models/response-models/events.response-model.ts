/* eslint-disable @typescript-eslint/no-explicit-any */
export type EventsResponse = Event[];

interface Event {
    id: number;
    project_id: number;
    push_data?: PushData;
}

interface PushData {
    commit_count: number;
    action: string;
    ref_type: string;
    commit_from?: string;
    commit_to: string;
    ref: string;
    commit_title: string;
}

export default EventsResponse;
