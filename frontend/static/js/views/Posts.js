// Posts.js
import AbstractView from './Abstractview.js';

export default class Posts extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <header>
                <h1>Posts</h1>
            </header>

            <main id="content">
                <section class="card">
                    <h2>Recent Posts</h2>
                    <article class="post">
                        <h3>Post 1 Title</h3>
                        <p>This is a summary of post 1. Click to read more...</p>
                        <a href="#" class="btn">Read More</a>
                    </article>
                    
                    <article class="post">
                        <h3>Post 2 Title</h3>
                        <p>This is a summary of post 2. Click to read more...</p>
                        <a href="#" class="btn">Read More</a>
                    </article>

                    <article class="post">
                        <h3>Post 3 Title</h3>
                        <p>This is a summary of post 3. Click to read more...</p>
                        <a href="#" class="btn">Read More</a>
                    </article>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Simple SPA Posts</p>
            </footer>
        `;
    }
}
