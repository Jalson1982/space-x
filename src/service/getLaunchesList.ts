import { gql } from "@apollo/client";

export const LAUNCHES_QUERY = gql`
  query GetLaunches($find: LaunchFind) {
    launches(find: $find) {
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      launch_date_utc
    }
  }
`;
