import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: #39009c;
`;
const InputContact = styled.input`
  cursor: auto;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: transparent;
  padding: 10px;
  background-color: #fff1f7;
  margin-left: 10px;
  color: #96006e;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
    inset 0 0 0 100px rgba(255, 255, 255, 1);
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    outline: 1px solid #39009c;
  }

  &::placeholder {
    color: #39009c;
  }
`;

const LabelContact = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  color: #39009c;
`;

const ButtonSubmit = styled.button`
  cursor: pointer;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #240a95;
  text-transform: uppercase;
  font-weight: 500;
  color: #ffffff;
  border-radius: 5px;
  border-color: transparent;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    background-color: #2d0fb2f7;
    box-shadow: 2px 1px 3px 1px rgb(26 0 27 / 48%);
  }
`;

export { Form, InputContact, LabelContact, ButtonSubmit };
