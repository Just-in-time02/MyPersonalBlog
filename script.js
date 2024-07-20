// dummy data for now, replace with your own data
const posts = [
  {
    title: "Mein erstes Projekt: 6 DOF Roboterarm",
    content: "",
    image: "MyProject.jpg"
  },
  {
    title: "Ein kleines Video dazu:",
    content: "",
    video:  "IMG_4283.mp4"
  },
 
];

// render posts
const postList = document.querySelector(".post-list");
posts.forEach((post) => {
  const postHTML = `
    <div class="post">
      <h2 class="post-title">${post.title}</h2>
      <img src="${post.image}" alt="${post.title}" class="post-image">
      <p class="post-content">${post.content}</p>
      ${post.video ? `
        <video width="100%" controls>
          <source src="${post.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      ` : ''}
    </div>
  `;
  postList.innerHTML += postHTML;
});
