import React, { useState, useEffect } from 'react';
import EditGrave from '../components/EditGrave';

interface EditGravePageProps {
  graveId: number;
  onEditGrave: (graveId: number, name: string, description: string) => void;
}

const EditGravePage: React.FC<EditGravePageProps> = ({ graveId, onEditGrave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // ここでAPIを呼び出して、お墓の詳細情報を取得し、
    // 取得したデータを使ってnameとdescriptionの状態を設定します。
    // 例: fetchGraveDetails(graveId).then(grave => { setName(grave.name); setDescription(grave.description); });
  }, [graveId]);

  const handleEditGrave = () => {
    onEditGrave(graveId, name, description);
  };

  return (
    <div className="edit-grave-page">
      <h2>お墓を編集</h2>
      <EditGrave
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        onEditGrave={handleEditGrave}
      />
    </div>
  );
};

export default EditGravePage;
