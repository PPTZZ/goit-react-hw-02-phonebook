import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { Component } from 'react';

export default class InputForm extends Component {

	render() {
		return (
			<>
				<FormControl>
					<InputLabel htmlFor='name-input'>Name</InputLabel>
					<Input
						onSubmit={this.handleSubmit}
						id='name-input'
						type='text'
						name='name'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
					/>
					<Button variant='contained' type='submit'>
						Submit
					</Button>
				</FormControl>
			</>
		);
	}
}
