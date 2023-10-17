import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>tasks manager</h1>
      <nav>
        <ul className={classes.link}>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              add Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
