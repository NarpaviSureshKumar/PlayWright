import {chromium, test} from "@playwright/test";


test('Test to launch the Salesforce application', async() => {

// create brwoser instance
const browser = await chromium.launch({headless:false});

//create a brwoser context
const context = await browser.newContext();

// create a new page
const page  = await context.newPage();

//login url
await page.goto("https://login.salesforce.com/");

await page.fill('#username', 'sureshkumar.narpavi-qk5t@force.com');
await page.fill('#password', '$Narpavi3$');

await page.click('#Login');
await page.waitForTimeout(20000);

console.log(`Url of the page `+ page.url());
console.log(`Title of the page is ${ await page.title()}`);

await page.close();

await context.close();


})