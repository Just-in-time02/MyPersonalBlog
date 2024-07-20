// dummy data for now, replace with your own data
const posts = [
  {
    title: "My First Project",
    content: "This is my first project, it's a simple website...",
    image: "robot-2.1.64.jpg"
  },
  {
    title: "My Second Project",
    content: "This is my second project, it's a more complex website...",
    image: "robot-2.1.64.jpg"
  },
  // add more posts here
];

// render posts
const postList = document.querySelector(".post-list");
posts.forEach((post) => {
  const postHTML = `
    <div class="post">
      <h2 class="post-title">${post.title}</h2>
      <img src="${post.image}" alt="${post.title}" class="post-image">
      <p class="post-content">${post.content}</p>
    </div>
  `;
  postList.innerHTML += postHTML;
});
