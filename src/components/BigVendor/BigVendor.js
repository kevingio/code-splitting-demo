import React from 'react';

import moment from 'moment';
import * as MUIcon from '@material-ui/icons';

const BigVendor = () => {
  const today = moment();

  return (
    <div>
      <h1>Hello World!</h1>
      <MUIcon.AccessAlarm />
      {today.format('DD-MM-YYYY')}
    </div>
  );
};

export default BigVendor;
