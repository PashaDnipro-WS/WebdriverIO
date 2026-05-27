import Page from '../page.js'

class ProductsPage extends Page {
    get pageTitle() {
        return $('//p[normalize-space()="Your one-stop shop for distributed infrastructure."]')
    }

    get iotSimCardLink() {
        return $('//a[contains(@href, "/products/iot-sim-card") and contains(., "IoT SIM Card")]')
    }

    open() {
        return super.open('products')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async openIotSimCardPage() {
        await this.iotSimCardLink.scrollIntoView()
        await this.iotSimCardLink.click()
    }
}

export default new ProductsPage()