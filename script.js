// Get the modal
var modal = document.getElementById("create-blog-modal");

// Get the button that opens the modal
var btn = document.getElementById("create-blog-btn");

// Get the element that closes the modal
const closeBtn = modal.querySelector(".close");
const cancelBtn = modal.querySelector(".cancelpost");

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listeners to the close button and cancel button
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Time at blog post

const d = new Date();
document.getElementById("time-stamp").innerHTML = d;
document.blogPosts.appendChild(d);

// Retrieve blog posts from server using AJAX
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/blog-posts");
xhr.onload = () => {
  if (xhr.status === 200) {
    const blogPosts = JSON.parse(xhr.responseText);
    // Display blog posts on main page
    const blogPostsContainer = document.getElementById("blog-posts-container");
    blogPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <button class="edit-button" data-post-id="${post.id}">Edit</button>
        <button class="delete-button" data-post-id="${post.id}">Delete</button>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
};
xhr.send();

// Add event listeners to edit and delete buttons
document.addEventListener("click", (event) => {
  if (event.target.matches(".edit-button")) {
    const postId = event.target.dataset.postId;
    // Open modal with post's information prefilled
  } else if (event.target.matches(".delete-button")) {
    const postId = event.target.dataset.postId;
    // Send request to server to delete post and remove from main page
  }
});
