import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents();
  formEvents();
};

export default startApp;
