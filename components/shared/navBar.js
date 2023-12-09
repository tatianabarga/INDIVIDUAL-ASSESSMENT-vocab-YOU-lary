import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <div id="logout-btn"></div></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><button id='add-button'>create new word</button></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;

  renderToDOM('#navigation', domString);
};

export default navBar;
