import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormBlock,
  InputBlock,
  LabelInfo,
  Input,
  Button,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUser({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormBlock onSubmit={this.handleSubmit}>
        <InputBlock>
          <LabelInfo htmlFor={this.nameInputId}>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
              id={this.nameInputId}
            />
          </LabelInfo>

          <LabelInfo htmlFor={this.numberInputId}>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
              id={this.numberInputId}
            />
          </LabelInfo>
        </InputBlock>

        <Button type="submit">Add contact</Button>
      </FormBlock>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;
