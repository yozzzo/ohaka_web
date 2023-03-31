import React, { useState } from 'react';

interface CreateGraveProps {
  onCreate: (name: string, description: string) => void;
}

const CreateGrave: React.FC<CreateGraveProps> = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onCreate(name, description);
    setName('');
    setDescription('');
  };

  return (
    <div className="create-grave">
      <h2>お墓を作成</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="grave-name">お墓の名前：</label>
        <input
          type="text"
          id="grave-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="grave-description">お墓の説明：</label>
        <textarea
          id="grave-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">お墓を作成</button>
      </form>
    </div>
  );
};

export default CreateGrave;
