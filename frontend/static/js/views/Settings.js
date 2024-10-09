import AbstractView from './Abstractview.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Settings");

    }
    async getHtml(){
        return `
           <header>
                <h1>Settings</h1>
            </header>

            <main id="content">
                <section class="settings">
                    <h2>Account Settings</h2>
                    <form>
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" placeholder="Enter your username">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter your password">
                        </div>
                        <button type="submit" class="btn">Save Changes</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Simple SPA Settings</p>
            </footer>
        
        `;
    }
}