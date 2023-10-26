import { StyledListUl } from './ContactList.styled';
import propTypes from 'prop-types';

const ContactList = ({ contacts, deletedContact }) => {
  return (
    <StyledListUl>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deletedContact(contact.id)}>Delete</button>
        </li>
      ))}
    </StyledListUl>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deletedContact: propTypes.func.isRequired,
};

export default ContactList;
