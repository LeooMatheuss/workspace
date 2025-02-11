class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async login(username, password) {
        await this.page.type('input[name="username"]', username);
        await this.page.type('input[name="password"]', password);
        await this.page.click('input[value="Log In"]');
    }
}

module.exports = LoginPage;
