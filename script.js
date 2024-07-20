// dummy data for now, replace with your own data
const posts = [
  {
    title: "Mein erstes Projekt: 6 DOF Roboterarm",
    content: "",
    image: "MyProject.jpg"
  },
  {
    title: "Ein kleines Video dazu:",
    content: "This is my second project, it's a more complex website...",
    video:  "IMG_4283.mp4"
  },
   {
    title: "Der Quellcode:",
    content: "This is my second project, it's a more complex website...",
    
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
