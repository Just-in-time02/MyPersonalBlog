// dummy data for now, replace with your own data
const posts = [
    {
      title: "My First Project",
      content: "This is my first project, it's a simple website..."
    },
    {
      title: "My Second Project",
      content: "This is my second project, it's a more complex website..."
    },
    // add more posts here
  ];
  
  // render posts
  const postList = document.querySelector(".post-list");
  posts.forEach((post) => {
    const postHTML = `
      <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-content">${post.content}</p>
      </div>
    `;
    postList.innerHTML += postHTML;
  });