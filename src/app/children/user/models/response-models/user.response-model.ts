/* eslint-disable @typescript-eslint/no-explicit-any */
interface UserResponse {
    id: number;
    username: string;
    name: string;
    state: string;
    avatar_url: string;
    web_url: string;
    created_at: string;
    bio: string;
    location: string;
    public_email: string;
    skype: string;
    linkedin: string;
    twitter: string;
    discord: string;
    website_url: string;
    organization: string;
    job_title: string;
    pronouns: string;
    bot: boolean;
    work_information: any;
    local_time: any;
    last_sign_in_at: string;
    confirmed_at: string;
    last_activity_on: string;
    email: string;
    theme_id: number;
    color_scheme_id: number;
    projects_limit: number;
    current_sign_in_at: string;
    identities: any[];
    can_create_group: boolean;
    can_create_project: boolean;
    two_factor_enabled: boolean;
    external: boolean;
    private_profile: boolean;
    commit_email: string;
    shared_runners_minutes_limit: any;
    extra_shared_runners_minutes_limit: any;
}

export default UserResponse;
