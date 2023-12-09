import addWordForm from '../components/forms/addWordForm';

const navigationEvents = () => {
  document.querySelector('#add-button').addEventListener('click', () => {
    addWordForm();
  });
};

export default navigationEvents;
