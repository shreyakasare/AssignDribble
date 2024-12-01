import React from 'react';

function Tablee({ data, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.email}</td>
            <td>
              <button onClick={() => onEdit(index)} className="button">Edit</button>
              <button onClick={() => onDelete(index)} className="button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tablee;
