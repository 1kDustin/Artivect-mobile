import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Navigation, {ArtistOnboardingStack} from '../../navigation';
import {LoginStack} from '../../navigation';

export const AuthSwitch = () => {
  const isAuth = useSelector(
    (state: RootState) => state.authSlice.isAuthenticated,
  );

  return isAuth ? <Navigation /> : <LoginStack />;
  // return <ArtistOnboardingStack />;
};
