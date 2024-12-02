import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";

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
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
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

function Step2({ onNext, onBack }) {
  const { setFormData } = useContext(AppContext);
  const [localFormData, setLocalFormData] = useState({
    workspaceTitle: "",
    workspaceURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setFormData((prev) => ({ ...prev, step2: localFormData }));
    onNext();
  };

  return (
    <Container>
      <Card>
        <Title>Let’s set up a home for all your work</Title>
        <p>You can always create another workspace later.</p>
        <Input
          type="text"
          name="workspaceTitle"
          placeholder="Workspace Name"
          value={localFormData.workspaceTitle}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="workspaceURL"
          placeholder="Workspace URL (optional)"
          value={localFormData.workspaceURL}
          onChange={handleChange}
        />

        <Button onClick={handleNext}>Create Workspace</Button>
      </Card>
    </Container>
  );
}

export default Step2;
