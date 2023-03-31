import React, { useState, useEffect } from 'react';
import GraveDetails from '../components/GraveDetails';

interface GraveDetailsPageProps {
  graveId: number;
}

const GraveDetailsPage: React.FC<GraveDetailsPageProps> = ({ graveId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // ここでAPIを呼び出して、お墓の詳細情報を取得し、
    // 取得したデータを使ってnameとdescriptionの状態を設定します。
    // 例: fetchGraveDetails(graveId).then(grave => { setName(grave.name); setDescription(grave.description); });
  }, [graveId]);

  return (
    <div className="grave-details-page">
      <h2>お墓の詳細</h2>
      <GraveDetails
        name={name}
        description={description}
      />
    </div>
  );
};

export default GraveDetailsPage;
