document.addEventListener('DOMContentLoaded', function() {
  // DOM元素
  const gameList = document.getElementById('gameList');
  const searchInput = document.getElementById('searchInput');
  const modal = document.getElementById('gameDetailModal');
  const closeModal = document.getElementById('closeModal');
  const gameDetailName = document.getElementById('gameDetailName');
  const gameDetailImage = document.getElementById('gameDetailImage');
  const gameDetailPrice = document.getElementById('gameDetailPrice');
  const gameComments = document.getElementById('gameComments');
  const newCommentInput = document.getElementById('newCommentInput');
  const addCommentButton = document.getElementById('addCommentButton');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutButton = document.getElementById('checkoutButton');
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const userDetails = document.getElementById('userDetails');

  // 游戏数据
    const games = [
    {
      id: 1,
      name: 'Minecraft',
      price: 165,
      image: 'image/aaa7ffb2f2785400cd4007243b9a8cad.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 2,
      name: 'Hollow knight',
      price: 48,
      image: 'image/OIP-C.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 3,
      name: 'Assassin,s Creed II',
      price: 96,
      image: 'image/R-C.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 4,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 5,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 6,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 7,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 8,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 9,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 10,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 11,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 12,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 13,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 14,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 15,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 16,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 17,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
    {
      id: 18,
      name: 'Minecraft',
      price: 165,
      image: 'images/minecraft.jpg',
      comments: [
        { text: "太好玩了", user: "Gamer123", date: "2025-05-10" },
        { text: "我喜欢它", user: "谢宇", date: "2025-05-15" }
      ]
    },
  ];

  // 应用状态
  let currentGame = null;
  let currentUser = null;
  let cart = [];

  // 初始化
  function init() {
    renderGames(games);
    setupEventListeners();
    updateCart();
  }

  // 渲染游戏列表
  function renderGames(gamesToRender) {
    gameList.innerHTML = '';
    gamesToRender.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.className = 'game-card';
      gameCard.dataset.id = game.id;

      const gameImage = document.createElement('img');
      gameImage.src = game.image || 'images/default-game.jpg';
      gameImage.alt = game.name;
      gameImage.className = 'game-image';

      const gameName = document.createElement('h3');
      gameName.textContent = game.name;

      const gamePrice = document.createElement('p');
      gamePrice.textContent = `¥${game.price}`;

      const addToCartBtn = document.createElement('button');
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.className = 'add-to-cart-btn';
      addToCartBtn.dataset.id = game.id;

      gameCard.appendChild(gameImage);
      gameCard.appendChild(gameName);
      gameCard.appendChild(gamePrice);
      gameCard.appendChild(addToCartBtn);

      gameList.appendChild(gameCard);
    });
  }

  // 设置事件监听
  function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(searchTerm)
      );
      renderGames(filteredGames);
    });

    // 游戏卡片点击
    gameList.addEventListener('click', function(e) {
      const gameCard = e.target.closest('.game-card');
      const addToCartBtn = e.target.closest('.add-to-cart-btn');
      
      if (gameCard && !addToCartBtn) {
        const gameId = parseInt(gameCard.dataset.id);
        currentGame = games.find(game => game.id === gameId);
        showGameDetails(currentGame);
      }
      
      if (addToCartBtn) {
        const gameId = parseInt(addToCartBtn.dataset.id);
        const game = games.find(game => game.id === gameId);
        addToCart(game);
      }
    });

    // 关闭模态框
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // 模态框外部点击关闭
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // 添加评论
    addCommentButton.addEventListener('click', addComment);
    newCommentInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addComment();
      }
    });

    // 购物车按钮事件委托
    cartItems.addEventListener('click', function(e) {
      if (e.target.classList.contains('decrease-btn')) {
        const id = parseInt(e.target.dataset.id);
        updateCartItem(id, -1);
      } else if (e.target.classList.contains('increase-btn')) {
        const id = parseInt(e.target.dataset.id);
        updateCartItem(id, 1);
      } else if (e.target.classList.contains('remove-btn')) {
        const id = parseInt(e.target.dataset.id);
        removeFromCart(id);
      }
    });

    // 结账
    checkoutButton.addEventListener('click', checkout);

    // 登录注册
    loginButton.addEventListener('click', () => window.location.href = 'login.html');
    registerButton.addEventListener('click', () => window.location.href = 'register.html');
  }

  // 显示游戏详情
  function showGameDetails(game) {
    gameDetailName.textContent = game.name;
    gameDetailImage.src = game.image || 'images/default-game.jpg';
    gameDetailPrice.textContent = `Price: ¥${game.price}`;
    
    // 清空之前的加入购物车按钮
    const existingBtn = document.getElementById('modalAddToCartBtn');
    if (existingBtn) existingBtn.remove();
    
    // 添加加入购物车按钮
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.id = 'modalAddToCartBtn';
    gameDetailPrice.insertAdjacentElement('afterend', addToCartBtn);
    
    addToCartBtn.addEventListener('click', () => {
      addToCart(game);
      modal.style.display = 'none';
    });
    
    // 渲染评论
    renderComments(game.comments || []);
    
    // 显示模态框
    modal.style.display = 'block';
    newCommentInput.focus();
  }

  // 渲染评论
  function renderComments(comments) {
    gameComments.innerHTML = '';
    
    if (!comments || comments.length === 0) {
      gameComments.innerHTML = '<p class="no-comments">No comments yet. Be the first to comment!</p>';
      return;
    }
    
    comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      commentDiv.innerHTML = `
        <p><strong>${comment.user || 'Anonymous'}</strong>: ${comment.text}</p>
        <small>${comment.date || 'Just now'}</small>
      `;
      gameComments.appendChild(commentDiv);
    });
  }

  // 添加评论
  function addComment() {
    const commentText = newCommentInput.value.trim();
    if (!commentText) {
      alert('Please enter a comment');
      return;
    }
    
    if (!currentGame) {
      alert('No game selected');
      return;
    }
    
    if (!currentGame.comments) {
      currentGame.comments = [];
    }
    
    const newComment = {
      text: commentText,
      user: currentUser || 'Guest',
      date: new Date().toLocaleDateString()
    };
    
    currentGame.comments.unshift(newComment);
    renderComments(currentGame.comments);
    newCommentInput.value = '';
  }

  // 购物车功能
  function addToCart(game) {
    const existingItem = cart.find(item => item.id === game.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...game,
        quantity: 1
      });
    }
    
    updateCart();
    alert(`${game.name} added to cart!`);
  }

  function updateCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty</p>';
      cartTotal.textContent = '¥0';
      return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${item.image || 'images/default-game.jpg'}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>¥${item.price} x ${item.quantity}</p>
        </div>
        <div class="cart-item-controls">
          <button class="decrease-btn" data-id="${item.id}">-</button>
          <span class="cart-item-quantity">${item.quantity}</span>
          <button class="increase-btn" data-id="${item.id}">+</button>
          <button class="remove-btn" data-id="${item.id}">×</button>
        </div>
      `;
      
      cartItems.appendChild(itemElement);
      total += item.price * item.quantity;
    });
    
    cartTotal.textContent = `¥${total}`;
  }

  function updateCartItem(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity += change;
      
      if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
      }
      
      updateCart();
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
  }

  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Checkout successful! Total: ¥${total}`);
    cart = [];
    updateCart();
  }

  // 初始化应用
  init();
});