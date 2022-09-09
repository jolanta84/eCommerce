const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = ` 
      <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li> 
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
              <li class="category-title">women</li>
              <li><a href="#" class="footer-link">t-shirts</a></li>
              <li><a href="#" class="footer-link">sweatshirts</a></li> 
              <li><a href="#" class="footer-link">shirts</a></li>
              <li><a href="#" class="footer-link">jeans</a></li>
              <li><a href="#" class="footer-link">trousers</a></li>
              <li><a href="#" class="footer-link">shoes</a></li>
              <li><a href="#" class="footer-link">casuals</a></li>
              <li><a href="#" class="footer-link">formals</a></li>
              <li><a href="#" class="footer-link">sports</a></li>
              <li><a href="#" class="footer-link">watch</a></li>
              </ul>  
        </div>   
      </div>
      <p class="footer-title">about company</p>
      <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo libero, voluptatum unde nam obcaecati incidunt illum, aut ab cumque dolor amet consectetur voluptates ut sed. Facere cum quaerat odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat omnis quisquam quaerat necessitatibus dolorum, ab, et quia distinctio doloribus reprehenderit aliquid excepturi cupiditate atque, voluptate laborum harum amet pariatur?</p>
      <p class="info">support emails - help@clothing.com</p>
      <p class="info">telephone - 0152 2566 2144</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
        </div>
      </div>
      <p class="footer-credit">Clothing, Best apparels online store</p>
      `;
};

createFooter();