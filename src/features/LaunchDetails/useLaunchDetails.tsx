import { useQuery } from "@apollo/client";
import { LAUNCHES_DETAILS } from "../../service";
import { useRoute } from "@react-navigation/native";
import {
  LaunchDetailsQueryVars,
  LaunchResponse,
} from "../../types/launchDetails";
import { RootRouteProps } from "../../navigation/types";
import { Routes } from "../../navigation/routes";

export const useLaunchDetails = () => {
  const { params } = useRoute<RootRouteProps<typeof Routes.LaunchDetails>>();
  const id = params?.id || "";

  const { data, error, loading } = useQuery<
    LaunchResponse,
    LaunchDetailsQueryVars
  >(LAUNCHES_DETAILS, {
    variables: { id },
  });

  return {
    data,
    error,
    loading,
  };
};
