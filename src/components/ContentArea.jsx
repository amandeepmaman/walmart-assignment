import React from 'react';
import { useAppContext } from '../context/AppContext';
import AppsPage from '../pages/AppsPage';
import DocumentsPage from '../pages/DocumentsPage';

const ContentArea = () => {
  const { currentPage } = useAppContext();

  const renderContent = () => {
    switch (currentPage) {
      case 'apps':
        return <AppsPage />;
      case 'documents':
        return <DocumentsPage />;
      default:
        return <AppsPage />;
    }
  };

  return (
    <div style={{
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      height: 'calc(100vh - 60px)',
    }}>
      {renderContent()}
    </div>
  );
};

export default ContentArea;