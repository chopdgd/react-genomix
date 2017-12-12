import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import faker from 'faker';


const Avatar = ({ user }) =>
  <div>
    {user !== undefined ?
      <div>
        <Image avatar src={faker.internet.avatar()} />
        <Icon name="chevron down" size="small"/>
      </div>
      :
      <div>
        <Icon name="user circle" size="big"/>
        <Icon name="chevron down" size="small"/>
      </div>
    }
  </div>;

export default Avatar;
