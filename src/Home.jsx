import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "azure",
        },
        [`.${menuClasses.container}`]: {
          backgroundColor: "azure",
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#d359ff",
                backgroundColor: "azure",
              };
          },
        }}
      >
        <MenuItem component={<Link to="/dashboard" />}>Home</MenuItem>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Profile</MenuItem>
        <p style={{ textAlign: "left", marginLeft: 10 }}>Settings</p>
        <SubMenu title="Settings">
          <MenuItem>General</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Account</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default Home;
