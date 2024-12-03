import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import Swal from "sweetalert2";
import "../App.css";
import "../App1.css";
const Container = styled.div`
  background-color: #ffffff;
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
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.3rem;
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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const updateStep = (direction) => {
    debugger
    if (direction === "next" && currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else if (direction === "prev" && currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const { setFormData } = useContext(AppContext);
  const [displayNameFlag, setDisabled] = useState(true);
  const [localFormData, setLocalFormData] = useState({
    fullName: "",
    displayName: "",
  });

  useEffect(() => {
    const nameParts = localFormData.fullName.split(" ").filter(Boolean);
    const firstName = nameParts[0] || "";
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
    debugger
    if (!localFormData.fullName || !localFormData.displayName) {
      Swal.fire({
        title: "Error!",
        text: "Please fill out Full Name.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    updateStep("next")
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
          disabled={displayNameFlag} // Replace `someCondition` with your logic
        />

        <Button class="btn btn-next" id="btn-next" onClick={handleNext}>
          Create Workspace
        </Button>
      </Card>
    </Container>
  );
}

export default Step1;
