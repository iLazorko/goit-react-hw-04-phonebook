import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';
import { ContactBook, ContactItem, ButtonDels } from './ContactList.styled';

export function ContactList({ contacts, filter, deleteContact }) {
  return (
    <ContactBook>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <ContactItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
            
              </p>
              <ButtonDels
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                <AiOutlineDelete />
              </ButtonDels>
            </ContactItem>
          );
        })}
    </ContactBook>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
