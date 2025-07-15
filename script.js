document.getElementById('loadBtn').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('postsContainer');
      container.innerHTML = ''; 

      data.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';

        const title = document.createElement('h3');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        const extra = document.createElement('div');
        extra.className = 'extra-info';
        extra.textContent = `Post ID: ${post.id}`;

        postEl.appendChild(title);
        postEl.appendChild(body);
        postEl.appendChild(extra);

        postEl.addEventListener('click', () => {
          extra.style.display = extra.style.display === 'none' ? 'block' : 'none';
        });

        container.appendChild(postEl);
      });
    })
    .catch(error => {
      console.error('Failed to fetch posts:', error);
    });
});
