function renderLastBlog() {
    const main = document.querySelector('main');
    const blogs = JSON.parse(localStorage.getItem('blogs'));
    console.log(blogs)
    main.textContent = '';
   for (let i=0; i < blogs.length; i++) {
    // <section>
    //         <h2>Title</h2>
    //         <hr>
    //         <p>description</p>
    //         <p>username</p>
    //     </section>
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const hr = document.createElement('hr');
    const pdescription = document.createElement('p');
    const pusername = document.createElement('p');
    h2.textContent = blogs[i].title
    section.appendChild(h2);
    section.appendChild(hr);
    pdescription.textContent = blogs[i].content;
    section.appendChild(pdescription);
    pusername.textContent = blogs[i].userName;
    section.appendChild(pusername);
    main.appendChild(section);
   }
}
renderLastBlog();