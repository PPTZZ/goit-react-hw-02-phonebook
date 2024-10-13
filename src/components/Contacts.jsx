import { Box, Chip, Grid2, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Contacts extends Component {
  handleDelete = e => {
    if (e.target.nodeName === 'DIV' || e.target.nodeName === 'P') {
      return;
    }
    const filteredContacts = this.props.contacts.filter(
      contact => contact.id != e.currentTarget.id
    );
    this.props.onDelete(filteredContacts);
  };
  renderContacts = contactList => {
    return contactList.map(contact => {
      return (
        <Box key={contact.id} id={contact.id} onClick={this.handleDelete}>
          <Grid2 container columnSpacing={2} sx={{ alignItems: 'center' }}>
            <Grid2>
              <Typography>Name: {contact.name} </Typography>
              <Typography>Phone Number: {contact.number}</Typography>
            </Grid2>
            <Grid2>
              <Chip label={<DeleteIcon />} />
            </Grid2>
          </Grid2>
        </Box>
      );
    });
  };

  render() {
    return <>{this.renderContacts(this.props.contacts)}</>;
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
