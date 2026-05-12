import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PageLayout;
