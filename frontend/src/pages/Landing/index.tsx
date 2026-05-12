import { Link } from 'react-router-dom';
import styled from 'styled-components';

import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import heroImg from '../../assets/hero.png';

const Landing: React.FC = () => {
  return (
    <Wrapper id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>Main Content</h1>
        <ul className="page-list">
          <li>
            <Link to="page/project-management">09-Project-Management</Link>
          </li>
          <li>
            <Link to="page/state-with-use-reducer">
              10-Advance-State-With-UseReducer
            </Link>
          </li>
          <li>
            <Link to="page/side-effects-use-effect">
              11-Side-Effects-useEffect
            </Link>
          </li>
          <li>
            <Link to="page/demo-project-react-quiz">
              13-Demo-Project_React-Quiz
            </Link>
          </li>
          <li>
            <Link to="page/http-requests">15-HTTP-Requests</Link>
          </li>
          <li>
            <Link to="page/custom-hooks">16-Custom-Hooks</Link>
          </li>
          <li>
            <Link to="page/forms-user-input">17-Forms-User-Input</Link>
          </li>
          <li>
            <Link to="page/form-actions">17b-Form-Actions</Link>
          </li>
          <li>
            <Link to="page/practice-project-food-order">
              18-Practice-Project_Food-Order
            </Link>
          </li>
          <li>
            <Link to="page/advanced-redux">20-Advanced-Redux</Link>
          </li>
          <li>
            <Link to="page/routing">21-Routing</Link>
          </li>
          <li>
            <Link to="page/authentication">22-Authentication</Link>
          </li>
          <li>
            <Link to="page/react-query">24-React-Query</Link>
          </li>
          <li>
            <Link to="page/animations">26-Animations</Link>
          </li>
          <li>
            <Link to="page/patterns">27-Patterns</Link>
          </li>
          <li>
            <Link to="page/react-typescript">29-React-TypeScript</Link>
          </li>
          <li>
            <Link to="page/react-summary">30-React-Summary</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .page-list {
    list-style: none;
    text-align: left;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--text-h);
  }
`;

export default Landing;
