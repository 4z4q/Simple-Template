let menu = document.querySelector(".menu");
let links = document.querySelector(".links");

menu.addEventListener("click", function(){
    links.classList.toggle("active");
});

header nav .links ul.active {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 400px;
    text-align: center;
    border-right: 1px solid var(--main-color);
    padding: 20px;
    z-index: 1000;
    transition: var(--main-transition);
  }

  @media (max-width: 991px) {
    header nav {
      padding: 18px 0;
      margin-bottom: 10px;
    }
    header .btn_open,
    header .btn_close {
      display: block;
      font-size: 25px;
    }
    header nav .links ul {
      display: none;
    }
    header nav .links .logo {
      display: block;
    }
  }