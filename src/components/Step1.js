import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import styled from 'styled-components';

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

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
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

function Step1({ onNext }) {
  const { setFormData } = useContext(AppContext);
  const [localFormData, setLocalFormData] = useState({
    fullName: '',
    displayName: '',
  });


  useEffect(() => {
    const nameParts = localFormData.fullName.split(' ').filter(Boolean);
    const firstName = nameParts[0] || '';
    setLocalFormData((prev) => ({
      ...prev,
      displayName: firstName,
    }));
  }, [localFormData.fullName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setFormData((prev) => ({ ...prev, step1: localFormData }));
    onNext();
  };

  return (
    <Container>
      <Card>
        <Title>Welcome! First things first...</Title>
        <p>You can always change them later.</p>
        <Input
          type="text"
          name="fullName"
          value={localFormData.fullName}
          onChange={handleChange}
          placeholder="Full Name (First Middle Last)"
        />
        <Input
          type="text"
          name="displayName"
          value={localFormData.displayName}
          onChange={handleChange}
          placeholder="Display Name"
        />
        <Button onClick={handleNext}>Next</Button>
      </Card>
    </Container>
  );
}

export default Step1;
