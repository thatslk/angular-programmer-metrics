export type EventsResponse = Event[]

interface Event {
  id: number
  project_id: number
  action_name: string
  target_id: any
  target_iid: any
  target_type: any
  author_id: number
  target_title: any
  created_at: string
  author: Author
  push_data?: PushData
  author_username: string
}

interface Author {
  id: number
  username: string
  name: string
  state: string
  avatar_url: string
  web_url: string
}

interface PushData {
  commit_count: number
  action: string
  ref_type: string
  commit_from?: string
  commit_to: string
  ref: string
  commit_title: string
  ref_count: any
}

export default EventsResponse;