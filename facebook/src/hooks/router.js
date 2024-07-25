import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../modules/MainPage/MainPage';
import ProfilePage from '../modules/Profile/Profile';
import TopBar from '../components/TopBar';
import Chat from '../modules/Chat/Chat';
import UserList from '../modules/AddFriend/AddFriend';
import Login from '../modules/Auth/Login';
import Signup from '../modules/Auth/Signup';
import UserInfo from '../modules/Auth/UserInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
        <TopBar></TopBar>
        <MainPage/>
        </div>

  },
  {
    path: "/login",
    element: <div>
        <Login/>
        </div>

  },
  {
    path: "/signup",
    element: <div>
        <Signup/>
        </div>

  },
  {
    path: "/info",
    element: <div>
        <UserInfo/>
        </div>

  },
  {
    path: "friend",
    element: <div>
        <TopBar/>
        <UserList/>
        </div>,
  },
  {
    path: "profile",
    element: <div>
        <TopBar/>
        <ProfilePage/>
        </div>,
  },
  {
    path: "chat",
    element: <div>
        <TopBar/>
        <Chat/>
        </div>,
  },
]);

export default router;
