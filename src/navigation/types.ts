import {RouteProp} from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

export type ScreensParams = {
  LaunchesList: undefined;
  LaunchDetails: {id: string};
};

export type RootRouteProps<ScreenName extends keyof ScreensParams> = RouteProp<
  ScreensParams,
  ScreenName
>;

export type Props = {};
