import ProductsDropdown from './dropdowns/products.dropdown.component.js'
import SolutionsDropdown from './dropdowns/solutions.dropdown.component.js'
import PricingDropdown from './dropdowns/pricing.dropdown.component.js'
import WhyTelnyxDropdown from './dropdowns/whyTelnyx.dropdown.component.js'
import ResourcesDropdown from './dropdowns/resources.dropdown.component.js'
import DevelopersDropdown from './dropdowns/developers.dropdown.component.js'

class Navbar {
    get productsLink() {
        return $('#radix-_R_4b9iivb_')
    }

    get solutionsLink() {
        return $('#radix-_R_4j9iivb_')
    }

    get pricingLink() {
        return $('#radix-_R_4r9iivb_')
    }

    get whyTelnyxLink() {
        return $('#radix-_R_539iivb_')
    }

    get resourcesLink() {
        return $('#radix-_R_5b9iivb_')
    }

    get developersLink() {
        return $('#radix-_R_5j9iivb_')
    }

    get productsDropdown() {
        return ProductsDropdown
    }

    get solutionsDropdown() {
        return SolutionsDropdown
    }

    get pricingDropdown() {
        return PricingDropdown
    }

    get whyTelnyxDropdown() {
        return WhyTelnyxDropdown
    }

    get resourcesDropdown() {
        return ResourcesDropdown
    }

    get developersDropdown() {
        return DevelopersDropdown
    }

    async openProductsDropdown() {
        await this.productsLink.click()
    }

    async openSolutionsDropdown() {
        await this.solutionsLink.click()
    }

    async openPricingDropdown() {
        await this.pricingLink.click()
    }

    async openWhyTelnyxDropdown() {
        await this.whyTelnyxLink.click()
    }

    async openResourcesDropdown() {
        await this.resourcesLink.click()
    }

    async openDevelopersDropdown() {
        await this.developersLink.click()
    }
}

export default new Navbar()