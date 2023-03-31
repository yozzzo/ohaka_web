import React, { useState } from 'react';

interface EditGraveProps {
  grave: { id: number; name: string; description: string };
  onUpdate: (id: number, name: string, description: string) => void;
}

const EditGrave: React.FC<EditGraveProps> = ({ grave, onUpdate }) => {
  const [name, setName] = useState(grave.name);
  const [description, setDescription] = useState(grave.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onUpdate(grave.id, name, description);
  };

  return (
    <div className="edit-grave">
      <h2>お墓を編集</h2>
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
        <button type="submit">お墓を更新</button>
      </form>
    </div>
  );
};

export default EditGrave;
