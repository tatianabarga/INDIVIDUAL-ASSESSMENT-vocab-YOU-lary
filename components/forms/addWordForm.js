import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter word Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="Definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="language">language</label>
        <input type="text" class="form-control" id="language" placeholder="language" value="${obj.language || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
