// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Try3', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Try3', async function() {
    await driver.get("http://localhost:3000/login")
    await driver.manage().window().setRect({ width: 1813, height: 982 })
    await driver.findElement(By.xpath("/html/body/form/input[1]")).click()
    await driver.findElement(By.xpath("/html/body/form/input[1]")).sendKeys("rasty")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.name("submit")).click()
    await driver.findElement(By.css("tr:nth-child(3) .for_href")).click()
    await driver.findElement(By.name("result")).click()
    await driver.findElement(By.name("result")).sendKeys("0.35")
    await driver.findElement(By.name("result")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Exit from your account")).click()
  })
})