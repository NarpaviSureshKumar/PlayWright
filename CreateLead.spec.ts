import {test} from "@playwright/test";

test('Test to create Lead', async ({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();

    //click CRmSFA (legacy text)
    await page.locator("text=CRM/SFA").click();

    await page.locator("//a[contains(text(),'Leads')]").click();

    await page.locator("//a[text() = 'Create Lead']").click();

    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Maveric");

    const firstName = page.locator("#createLeadForm_firstName");
    await firstName.fill("Suresh");

    const lastName = page.locator("#createLeadForm_lastName");
    await lastName.fill("Kumar");

    const salutation = page.locator("[name='personalTitle']");
    await salutation.fill('Mr');

    const title = page.locator("#createLeadForm_personalTitle");
    await title.fill("Hi");

    const department = page.locator("(//input[@type='text'])[38]");
    await department.fill('IT');

    const annualIncome = await page.locator("#createLeadForm_annualRevenue");
    await annualIncome.fill('3500000');

    const phoneNo = page.locator("#createLeadForm_primaryPhoneNumber");
    await phoneNo.fill('9840976639');

    // await page.getByRole('button',{name: "submitButton"}).click();

    await page.locator(".smallSubmit").click();

    console.log(`The status of the lead ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    console.log(`The companyName is ${await (page.locator("#viewLead_companyName_sp")).innerText()}`);
    console.log(`The firstName is ${await (page.locator("#viewLead_firstName_sp")).innerText()}`);
    console.log(`The lastName is ${await (page.locator("#viewLead_lastName_sp")).innerText()}`);

    await page.waitForTimeout(10000);
    console.log(`The page title is ${await page.title()}`);
})