let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Automático
setInterval(nextSlide, 4000);


// Cria e aplica estilos dinamicamente
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #0d1b2a;
    color: #fff;
  }
  nav {
    background-color: #1b263b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  }
  .logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6em;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 1px;
  }
  .nav-links {
    display: flex;
    gap: 20px;
  }
  .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1em;
    padding: 8px 14px;
    border-radius: 6px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .nav-links a:hover {
    background-color: #415a77;
  }
  .nav-links a.active {
    background-color: #00b4d8;
    color: #fff;
    font-weight: bold;
  }
  .nav-icons {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .nav-icons i {
    font-size: 1.2em;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .nav-icons i:hover {
    color: #00b4d8;
  }
  .profile {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #00b4d8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }
  .search-bar {
    padding: 20px 30px;
    margin-top: 80px;
  }
  .search-bar input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
  }
  .container {
    padding: 0 30px;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 10px;
  }
  .ver-mais {
    text-align: right;
    font-size: 14px;
    margin-bottom: 10px;
    cursor: pointer;
    color: #00aaff;
  }
  .ver-mais:hover {
    text-decoration: underline;
  }
  .section {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
  }
  .card {
    display: inline-block;
    width: 150px;
    margin-right: 10px;
    vertical-align: top;
  }
  .card img {
    width: 100%;
    border-radius: 8px;
  }
  .card-title {
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
  }
`;
document.head.appendChild(style);

// Cria a navbar
const nav = document.createElement('nav');
nav.innerHTML = `
  <div class="logo">Remember</div>
  <div class="nav-links">
    <a href="inicio.html">Início</a>
    <a href="catalogo.html" class="active">Catálogos</a>
    <a href="Quizzes.html">Quizzes</a>
    <a href="Chats.html">Chats</a>
    <a href="pastas.html">Minhas Pastas</a>
  </div>
  <div class="nav-icons">
    <i class="fas fa-bell"></i>
    <i class="fas fa-search"></i>
    <div class="profile">B</div>
  </div>
`;
document.body.appendChild(nav);

// Cria a barra de busca
const searchBar = document.createElement('div');
searchBar.className = "search-bar";
searchBar.innerHTML = `<input type="text" placeholder="Pesquise">`;
document.body.appendChild(searchBar);

// Cria a seção de conteúdo
const container = document.createElement('div');
container.className = 'container';

const sections = {
  '🎬 Filmes': [
    ['img/ainda-estou-aqui.jpg', 'Ainda estou aqui'],
    ['img/Djonga-vertical.jpg', 'Django livre'],
    ['img/sonhos-roubados.jpg', 'Sonhos roubados'],
    ['img/Escritores da liberdade.jpg', 'Escritores da liberdade'],
    ['img/velozes e furiosos.webp', 'Velozes e furiosos'],
    ['img/o-poço.webp', 'O poço'],
    ['img/Homem aranha.jpg', 'O Homem-aranha']
  ],
  '📚 Livros': [
    ['img/1984.jpg', '1984'],
    ['img/Quarto de despejo.webp', 'Quarto de Despejo'],
    ['img/O Apanhador.jpg', 'O Apanhador'],
    ['img/Fahrenheit.jpg', 'Fahrenheit 451'],
    ['img/O príncipe cruel.jpg', 'O príncipe cruel'],
    ['img/Vermelho branco e sangue azul.jpg', 'Vermelho branco e sangue azul'],
    ['img/sete-maridos.jpg', 'Os sete maridos de Evelyn Hugo'],
    ['img/aseleção.jpg', 'A seleção']
  ],
  '📺 Séries': [
    ['img/gossip-girl.jpg', 'Gossip Girl'],
    ['img/b99.jpg', 'Brooklyn Nine-Nine'],
    ['img/uma mulher contra hitler.png', 'Uma mulher contra hitler'],
    ['img/big.jpg', 'The big bang theory'],
    ['img/Bridgerton.webp', 'Bridgerton'],
    ['img/uma mulher contra hitler.png', 'Uma mulher contra hitler'],
    ['img/uma mulher contra hitler.png', 'Uma mulher contra hitler']
  ]
};

for (const [title, items] of Object.entries(sections)) {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const verMais = document.createElement('div');
  verMais.className = 'ver-mais';
  verMais.textContent = 'ver mais';
  const section = document.createElement('div');
  section.className = 'section';

  items.forEach(([src, label]) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${src}"><div class="card-title">${label}</div>`;
    section.appendChild(card);
  });

  container.appendChild(h2);
  container.appendChild(verMais);
  container.appendChild(section);
}

document.body.appendChild(container);

