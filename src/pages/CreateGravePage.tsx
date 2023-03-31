import React, { useState } from 'react';
import CreateGrave from '../components/CreateGrave';

interface CreateGravePageProps {
  onCreateGrave: (name: string, description: string) => void;
}

const CreateGravePage: React.FC<CreateGravePageProps> = ({ onCreateGrave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateGrave = () => {
    onCreateGrave(name, description);
  };

  return (
    <div className="create-grave-page">
      <h2>お墓を作成</h2>
      <CreateGrave
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        onCreateGrave={handleCreateGrave}
      />
    </div>
  );
};

export default CreateGravePage;
