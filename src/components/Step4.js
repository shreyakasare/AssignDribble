import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext';

const Container = styled.div`
 background-color: #ffffff;
  height: 65vh;
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

const TableContainer = styled.div`
  margin-top: 2rem;
  width: 90%;
  max-width: 600px;
`;

const EditableInput = styled.input`
  width: 100%;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
  background-color: #6a4ca8;
  color: white;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;


const ActionButton = styled.button`
  background-color: ${(props) => props.color || "#6a4ca8"};
  color: white;
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0.2rem;

  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


function Step4() {
  debugger
  const { formData } = useContext(AppContext);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [tableData, setTableData] = useState([
    {
      fullName: formData.step1?.fullName || "",
      displayName: formData.step1?.displayName || "",
      workspaceTitle: formData.step2?.workspaceTitle || "",
      workspaceURL: formData.step2?.workspaceURL || "",
      myself: formData.step3.usage === "myself" ? "Yes" : "No",
      team: formData.step3.usage === "team" ? "Yes" : "No",
      isEditing: false,
    },
  ]);

  const handleEdit = (index) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].isEditing = !updatedData[index].isEditing;
      return updatedData;
    });
  };

  const handleChange = (index, field, value) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index][field] = value;
      return updatedData;
    });
  };

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Card>
        <Title>Congratulations, Eden is ready!</Title>
        <p>You have successfully completed the onboarding process.</p>
        <Button
          onClick={() => setIsTableVisible(true)}>Launch Eden</Button>
      </Card>

      {isTableVisible && (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Full Name</Th>
                <Th>Display Name</Th>
                <Th>Workspace Title</Th>
                <Th>Workspace URL</Th>
                <Th>Myself</Th>
                <Th>Team</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <Td>
                    {row.isEditing ? (
                      <EditableInput
                        value={row.fullName}
                        onChange={(e) =>
                          handleChange(index, "fullName", e.target.value)
                        }
                      />
                    ) : (
                      row.fullName
                    )}
                  </Td>
                  <Td>
                    {row.isEditing ? (
                      <EditableInput
                        value={row.displayName}
                        onChange={(e) =>
                          handleChange(index, "displayName", e.target.value)
                        }
                      />
                    ) : (
                      row.displayName
                    )}
                  </Td>
                  <Td>
                    {row.isEditing ? (
                      <EditableInput
                        value={row.workspaceTitle}
                        onChange={(e) =>
                          handleChange(index, "workspaceTitle", e.target.value)
                        }
                      />
                    ) : (
                      row.workspaceTitle
                    )}
                  </Td>
                  <Td>
                    {row.isEditing ? (
                      <EditableInput
                        value={row.workspaceURL}
                        onChange={(e) =>
                          handleChange(index, "workspaceURL", e.target.value)
                        }
                      />
                    ) : (
                      row.workspaceURL
                    )}
                  </Td>
                  <Td>{row.myself}</Td>
                  <Td>{row.team}</Td>
                  <Td>
                    {row.isEditing ? (
                      <>
                        <ActionButton
                          color="#4caf50"
                          onClick={() => handleEdit(index)}
                        >
                          Save
                        </ActionButton>
                        {/* <ActionButton
                          color="#f44336"
                          onClick={() => handleEdit(index)}
                        >
                          Cancel
                        </ActionButton> */}
                      </>
                    ) : (
                      <EditButton onClick={() => handleEdit(index)}>
                        Edit
                      </EditButton>
                    )}
                    <ActionButton
                      color="#f44336"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </ActionButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default Step4;
