import { test } from "@playwright/test";

test(`Test to edit a lead`, async ({page}) => {
    
    //Navigate to the URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
    await page.locator("#username").fill("Demosalesmanager");

    //Enter password
    await page.locator("#password").fill("crmsfa");

    //Click on Login button
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA (legacy text)
    await page.locator("text=CRM/SFA").click();
    //await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    //click on Leads
    await page.locator("//a[contains(text(),'Leads')]").click();

    await page.locator("//a[contains(text(),'Find Leads')]").click();

    //Enter firstName
    await page.locator("(//div[@class='x-form-element']/input[@name='firstName'])[3]").fill("Suresh");

    //click on Find Leads
    await page.locator("//button[contains(text(),'Find Leads')]").click();

    await page.waitForTimeout(10000);
    //click on first lead
    await page.locator("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").click();

    //click on Edit button
    await page.locator("//a[contains(text(),'Edit')]").click();

    //Edit companyName
    await page.locator("#updateLeadForm_companyName").fill("Testleaf")

    //Edit annual revenue
    await page.locator("#updateLeadForm_annualRevenue").fill("100000");

    //Edit department
    await page.locator("#updateLeadForm_departmentName").fill("Sales");

    //Enter description
    await page.locator("#updateLeadForm_description").fill("This is the updated account");

    //click update button
    await page.locator("//input[@value='Update']").click();

    //printing the updated fields
    console.log(`The updated companyName is ${await (page.locator("#viewLead_companyName_sp")).innerText()}`);
    
    console.log(`The updated revenue amount is ${await (page.locator("#viewLead_annualRevenue_sp")).innerText()}`);

    await page.waitForTimeout(10000);
    console.log(`The updated department is ${await (page.locator("#viewLead_departmentName_sp")).innerText()}`);

    await page.waitForTimeout(5000);
    console.log(`The page title is ${await page.title()}`);
    
})