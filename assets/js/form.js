
const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
const submitButton = document.querySelector('#button')

const blogs = JSON.parse(localStorage.getItem('blogs'))||[];



function displayLastBlog(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

function displayMessage(status, message) {
    alert(status + ' ' + message)
}
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const userName = userNameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (userName === '') {
        displayMessage('error', 'username cannot be blank');
    } else if (title === '') {
        displayMessage('error', 'title cannot be blank');
    } else if (content === '') {
        displayMessage('error', 'content cannot be blank');

    } else {
        displayMessage('success', 'Blog posted successfully')
        location.href = "blog.html"
    }
    const newBlog = {
        userName, title, content
    }
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    

    

});




