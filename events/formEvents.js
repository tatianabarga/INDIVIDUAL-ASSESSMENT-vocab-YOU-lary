import { createWord, updateWord, getWords } from '../api/wordData';
import showWords from '../pages/words';

const formEvents = () => {
  document.querySelector('submit-word').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
      };

      console.log('#title');

      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords().then(showWords);
        });
      });
    }
  });
};

export default formEvents;
