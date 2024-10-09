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
        </header>

        <main id="content">
            <section class="dashboard">
                <h2>Welcome to the Dashboard</h2>
                <div class="card">
                    <h3>Analytics Overview</h3>
                    <p>Check your analytics and insights.</p>
                </div>
                <div class="card">
                    <h3>User Activity</h3>
                    <p>View user activities and engagement metrics.</p>
                </div>
                <div class="card">
                    <h3>Manage Posts</h3>
                    <p><a href="/posts" data-link class="btn">View Posts</a></p>
                </div>
                <div class="card">
                    <h3>Settings</h3>
                    <p><a href="/settings" data-link class="btn">Go to Settings</a></p>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Simple SPA Dashboard</p>
        </footer>
    `;

    }
}