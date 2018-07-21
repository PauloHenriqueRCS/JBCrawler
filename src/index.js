import express from 'express';

const app = express();

const port = 3000;

app.listen(port , () => {
  console.log('Started on port ', port);
});

export default app


//  import 'chromedriver';
// // var webdriver = require('selenium-webdriver');
// // var driver = new webdriver.Builder()
// //   .forBrowser('chrome')
// //   .build();

// //   driver.manage().deleteAllCookies()

// //   driver.get('https://google.com')
// //   driver.close()

// import { Builder, By, Key, until } from 'selenium-webdriver';

// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('https://www.google.com');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();