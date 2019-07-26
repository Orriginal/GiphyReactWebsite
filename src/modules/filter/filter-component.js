import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function FilterComponent({ filterOptions, actions }) {
  const handleChange = name => event => {
    actions.setFilter({ ...filterOptions, [name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={filterOptions.hasUser}
          onChange={handleChange('hasUser')}
          value='hasUser'
          color='primary'
        />
      }
      label='Has a user'
    />
  );
}
