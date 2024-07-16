import { LAUNCHES_QUERY } from "../../service";
import { useQuery } from '@apollo/client';
import { LaunchesQueryData } from "../../types/launches";
import { useNavigation } from '@react-navigation/native';
import { Routes } from "../../navigation/routes";
import { useMemo, useState } from "react";

export const useLaunchList = () => {
  const [selectedRocket, setSelectedRocket] = useState<string | null>(null);

  const find = useMemo(() => {
    if (selectedRocket) {
      return { rocket_name: selectedRocket };
    }
    return {};
  }, [selectedRocket]);

  const { data, loading, error } = useQuery<LaunchesQueryData>(LAUNCHES_QUERY, {
    variables: { find }
  });

  const filteredLaunches = useMemo(() => {
    if (!selectedRocket) {
      return data?.launches;
    }
    return data?.launches?.filter(launch => launch.rocket?.rocket_name === selectedRocket);
  }, [data?.launches, selectedRocket]);
  const { navigate } = useNavigation();

  const rockets = useMemo(() => {
    const rocketNamesSet = new Set<string>();
    data?.launches?.forEach(launch => {
      if (launch.rocket && launch.rocket.rocket_name) {
        rocketNamesSet.add(launch.rocket.rocket_name);
      }
    });
    return Array.from(rocketNamesSet);
  }, [data?.launches]); 

  const navigateToLaunchDetails = (id: string) => {
    navigate(Routes.LaunchDetails, { id });
  };

  const selectRocket = (rocket: string) => {
    if(rocket === selectedRocket) {
      setSelectedRocket(null);
      return;
    }
    setSelectedRocket(rocket);
  };

  return {
    data: filteredLaunches,
    loading,
    error,
    navigateToLaunchDetails,
    rockets,
    selectedRocket,
    selectRocket
  };
};
