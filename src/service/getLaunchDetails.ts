import { gql } from "@apollo/client";

export const LAUNCHES_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      launch_date_utc
      launch_site {
        site_name
      }
      links {
        article_link
        video_link
      }
    }
  }
`;
