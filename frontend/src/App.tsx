import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import {
  HomeLayout,
  Landing,
  PageLayout,
  ProjectManagement,
  StateWithUseReducer,
  SideEffectsUseEffect,
  DemoProjectReactQuiz,
  HttpRequests,
  CustomHooks,
  FormsUserInput,
  FormActions,
  PracticeProjectFoodOrder,
  AdvancedRedux,
  Routing,
  Authentication,
  ReactQuery,
  Animations,
  Patterns,
  ReactTypescript,
  ReactSummary,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'page',
        element: <PageLayout />,
        children: [
          {
            path: 'project-management',
            element: <ProjectManagement />,
          },
          {
            path: 'state-with-use-reducer',
            element: <StateWithUseReducer />,
          },
          {
            path: 'side-effects-use-effect',
            element: <SideEffectsUseEffect />,
          },
          {
            path: 'demo-project-react-quiz',
            element: <DemoProjectReactQuiz />,
          },
          {
            path: 'http-requests',
            element: <HttpRequests />,
          },
          {
            path: 'custom-hooks',
            element: <CustomHooks />,
          },
          {
            path: 'forms-user-input',
            element: <FormsUserInput />,
          },
          {
            path: 'form-actions',
            element: <FormActions />,
          },
          {
            path: 'practice-project-food-order',
            element: <PracticeProjectFoodOrder />,
          },
          {
            path: 'advanced-redux',
            element: <AdvancedRedux />,
          },
          {
            path: 'routing',
            element: <Routing />,
          },
          {
            path: 'authentication',
            element: <Authentication />,
          },
          {
            path: 'react-query',
            element: <ReactQuery />,
          },
          {
            path: 'animations',
            element: <Animations />,
          },
          {
            path: 'patterns',
            element: <Patterns />,
          },
          {
            path: 'react-typescript',
            element: <ReactTypescript />,
          },
          {
            path: 'react-summary',
            element: <ReactSummary />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
