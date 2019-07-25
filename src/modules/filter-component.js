import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function FilterComponent({ filterOptions, actions }) {
  const [state, setState] = React.useState({
    hasUser: filterOptions.hasUser
  });

  const handleChange = name => event => {
    actions.setFilter({ ...filterOptions, [name]: event.target.checked });
    setState({ ...filterOptions, [name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.hasUser}
          onChange={handleChange('hasUser')}
          value='hasUser'
          color='primary'
        />
      }
      label='Has a user'
    />
  );
}
