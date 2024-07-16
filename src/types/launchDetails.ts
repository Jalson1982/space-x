export interface Launch {
    __typename: "Launch";
    details: string;
    launch_date_utc: string;
    launch_site?: string;
    links: LaunchLinks;
    mission_name: string;
    rocket: LaunchRocket;
  }
  
  export interface LaunchLinks {
    __typename: "LaunchLinks";
    article_link: string;
    video_link: string;
  }
  
  export interface LaunchRocket {
    __typename: "LaunchRocket";
    rocket_name: string;
    rocket_type: string;
  }
  
  
  export interface LaunchResponse {
    launch: Launch;
  }

  export interface LaunchDetailsQueryVars {
    id: string;
  }
  