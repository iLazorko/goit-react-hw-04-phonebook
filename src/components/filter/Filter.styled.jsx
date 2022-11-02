import styled from 'styled-components';

const FilterWrap = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const InputFilter = styled.input`
  width: 100%;
  cursor: auto;
  border-radius: 5px;
  border: none;
  outline: transparent;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff1f7;
  color: #96006e;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
    inset 0 0 0 100px rgba(255, 255, 255, 1);
  transition: all 1.25s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    outline: 1px solid #f70083;
  }
`;

const LabelFilter = styled.label`
  color: #f70083;
  width: 100%;
`;

export { FilterWrap, InputFilter, LabelFilter };
