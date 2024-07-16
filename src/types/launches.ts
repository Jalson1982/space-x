export interface Launch {
  id: string;
  mission_name: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  details: string | null;
  launch_date_utc: string;
}

export interface LaunchesQueryData {
  launches: Launch[];
}

export interface LaunchesQueryVars {
  limit?: number;
}
