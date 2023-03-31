import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GraveList from '../components/GraveList';

interface HomePageProps {
  onFetchGraves: () => Promise<Array<{ id: number; name: string; }>>;
}

const HomePage: React.FC<HomePageProps> = ({ onFetchGraves }) => {
  const [graves, setGraves] = useState<Array<{ id: number; name: string; }>>([]);

  useEffect(() => {
    // ここでAPIを呼び出して、お墓のリストを取得し、
    // 取得したデータを使ってgravesの状態を設定します。
    onFetchGraves().then(fetchedGraves => setGraves(fetchedGraves));
  }, [onFetchGraves]);

  return (
    <div className="home-page">
      <h2>お墓一覧</h2>
      <GraveList graves={graves} />
      <Link to="/create-grave">新しいお墓を作成</Link>
    </div>
  );
};

export default HomePage;
