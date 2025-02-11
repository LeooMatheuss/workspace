class TransferFundsPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToTransferFunds() {
        await this.page.waitForSelector('[href="transfer.htm"]', { visible: true, timeout: 10000 });
        await this.page.click('[href="transfer.htm"]');
    }

    async transferFunds(amount) {
        await this.page.waitForSelector('[name="input"]', { visible: true });
        await this.page.type('[name="input"]', amount);
        await this.page.click('[value="Transfer"]');
    }
}

module.exports = TransferFundsPage;
