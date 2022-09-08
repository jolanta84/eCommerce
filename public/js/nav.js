const createNav = ()=> {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `<div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="brand logo" />
    <div class="nav-items">
      <div class="search">
        <input
          type="text"
          class="search-box"
          placeholder="search brand, product"
        />
        <button class="search-btn">Search</button>
      </div>
      <a href="#"><img src="img/user.png" alt="user icon"/></a>
      <a href="#"><img src="img/cart.png" alt="cart icon" /></a>
    </div>
  </div>
  <ul class="link-container">
    <li class="link-item"><a href="#" class="link">home</a>
    </a></li>
    <li class="link-item"><a href="#" class="link">women</a>
    </a></li>
    <li class="link-item"><a href="#" class="link">men</a>
    </a></li>
    <li class="link-item"><a href="#" class="link">kids</a>
    </a></li>
    <li class="link-item"><a href="#" class="link">accesories</a>
    </a></li>
  </ul>`;
}

createNav();