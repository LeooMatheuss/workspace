const puppeteer = require('puppeteer');
const config = require('./config');
const data = require('./data.json');
const pause = require('./utils/pause');
const LoginPage = require('./pages/LoginPage');
const TransferFundsPage = require('./pages/TransferFundsPage');

(async () => {
   
    const browser = await puppeteer.launch(config);
    const page = await browser.newPage();

   
    const loginPage = new LoginPage(page);
    const transferFundsPage = new TransferFundsPage(page);

    
    await loginPage.navigate();
    await pause(3000);
    await loginPage.login(data.name, data.password);
    console.log("✅ Login realizado com sucesso!");
    await pause(5000);

    
    await transferFundsPage.navigateToTransferFunds();
    console.log("✅ Acessando página de Transfer Funds...");
    await pause(3000);
    
    await transferFundsPage.transferFunds(data.amount);
    console.log("✅ Transferência realizada com sucesso!");
    await pause(5000);

 
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    await browser.close();
})();
