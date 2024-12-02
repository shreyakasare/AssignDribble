import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext';

const Container = styled.div`
  background-color: #fff3e8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #3c3c3c;
`;

const OptionButton = styled.button`
  background: ${(props) => (props.selected ? '#6a4ca8' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#3c3c3c')};
  border: 1px solid ${(props) => (props.selected ? '#6a4ca8' : '#ccc')};
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.selected ? '#593a8b' : '#e6e6e6')};
    color: ${(props) => (props.selected ? '#fff' : '#3c3c3c')};
  }
`;

const Button = styled.button`
  background: #6a4ca8;
  color: white;
  padding: 0.8rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #593a8b;
  }
`;

function Step3({ onNext, onBack }) {
  const { formData, setFormData } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    if (!selectedOption) {
      setErrors({ usage: 'Please select one option' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    debugger
    if (!selectedOption) {
      setErrors({ usage: 'Please select an option before proceeding.' });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      step3: {
        usage: selectedOption,
      },
    }));

    onNext();
  };

  return (
    <Container>
      <Card>
        <Title>How are you planning to use Eden?</Title>
        <p>We’ll streamline your setup experience accordingly.</p>
        <OptionButton
          selected={selectedOption === 'myself'}
          onClick={() => handleOptionClick('myself')}
        >
          For myself
        </OptionButton>
        <OptionButton
          selected={selectedOption === 'team'}
          onClick={() => handleOptionClick('team')}
        >
          With my team
        </OptionButton>

        {errors.usage && <p style={{ color: 'red' }}>{errors.usage}</p>}


        <Button onClick={handleSubmit}>Create Workspace</Button>
      </Card>
    </Container>
  );
}

export default Step3;
