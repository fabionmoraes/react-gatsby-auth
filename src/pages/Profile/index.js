import React from 'react';
import SEO from '../../components/seo';

import { View } from './styles';

const Profile = () => {
  return (
    <>
      <SEO title="Perfil" />
      <View>
        <p>Welcome back to your profile!</p>
        <p>
          This is a client-only route. You could set up a form to save information
          about a user here.
        </p>
      </View>
    </>
  );
};

export default Profile;
