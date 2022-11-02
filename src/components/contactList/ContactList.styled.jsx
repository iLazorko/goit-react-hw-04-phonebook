import styled from 'styled-components';

const ContactBook = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: #96006e;
`;

const ButtonDels = styled.button`
  background-color: #c881b5;
  width: 30px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: transform 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export { ContactBook, ContactItem, ButtonDels };
