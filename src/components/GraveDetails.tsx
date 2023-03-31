import React from 'react';

interface Grave {
  id: number;
  name: string;
  description: string;
  deceased: { id: number; name: string; birthDate: string; deathDate: string }[];
}

interface GraveDetailsProps {
  grave: Grave;
}

const GraveDetails: React.FC<GraveDetailsProps> = ({ grave }) => {
  return (
    <div className="grave-details">
      <h2>{grave.name}</h2>
      <p>{grave.description}</p>
      <h3>故人一覧</h3>
      <ul>
        {grave.deceased.map((deceased) => (
          <li key={deceased.id}>
            <span>{deceased.name}</span> (
            <span>
              {deceased.birthDate} - {deceased.deathDate}
            </span>
            )
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraveDetails;
