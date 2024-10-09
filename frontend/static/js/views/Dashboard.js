import AbstractView from './Abstractview.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");

    }
    async getHtml(){
        return `
            <header>
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        <li><a href="#" onclick="loadContent('home')">Home</a></li>
                        <li><a href="#" onclick="loadContent('analytics')">Analytics</a></li>
                        <li><a href="#" onclick="loadContent('settings')">Settings</a></li>
                        <li><a href="#" onclick="loadContent('profile')">Profile</a></li>
                    </ul>
                </nav>
            </header>

            <main id="content">
                <section class="card">
                    <h2>Welcome to the Dashboard</h2>
                    <p>This is a simple dashboard for your application.</p>
                </section>
            </main>
            <a href="/posts" data-link>View recent posts</a>

            <footer>
                <p>&copy; 2024 Simple SPA Dashboard</p>
            </footer>
        `;
    }
}