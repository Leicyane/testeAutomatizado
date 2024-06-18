const {Builder, By, Key, until} = require("selenium-webdriver")

async function abrirSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://br.pinterest.com")
        await driver.sleep(5000)

        //Login
        await driver.executeScript(`document.querySelector(".RCK").click()`)
        await driver.sleep(3000)
        const emailInput = await driver.findElement(By.css("input[id='email']"))
        await emailInput.sendKeys("abc")
        const passwordInput = await driver.findElement(By.id("password"))
        await passwordInput.sendKeys("abc")
        await driver.executeScript(`document.querySelector(".RCK[type='submit']").click()`)
        await driver.sleep(3000)

        //Navegar
        await driver.executeScript(`document.querySelector(".Wk9").click()`)
        const nav1 = driver.findElement(By.css("a[href='/today/']"))
        await nav1.click()
        
        //Pesquisar pins
        const searchInput = driver.findElement(By.css("input[name='searchBoxInput']"))
        await searchInput.sendKeys("Pinterest")
        await searchInput.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        //Salvar pin
        const pin = driver.findElement(By.css("a[href='/pin/573294227582207336/']"))
        await pin.click()
        await driver.sleep(3000)
        await driver.executeScript(`document.querySelector(".RCK[type='button']").click()`)

        //Sair
        await driver.executeScript(`document.querySelector(".HEm[type='button']").click()`)
        await driver.sleep(3000)
        await driver.executeScript(`document.evaluate("//span[contains(text(), 'Sair')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
    
        
    } catch(e){
        console.log(e)
    }
}
abrirSite()