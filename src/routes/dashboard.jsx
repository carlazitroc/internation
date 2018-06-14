import GroupList from 'views/GroupPage/GroupList.jsx';
import UserList from 'views/UserPage/UserList.jsx';
import UserDetails from 'views/UserPage/UserDetails.jsx';

var dashRoutes = [
    { path: "/users", name: "User List", icon: "users_circle-08", component: UserList },
    // { path: "/user-profile", name: "User Profile", icon: "users_single-02", component: UserDetails },
    { path: "/groups", name: "Group List", icon: "files_paper", component: GroupList },
    { redirect: true, path: "/", pathTo: "/users", name: "User Management" }
];
export default dashRoutes;
