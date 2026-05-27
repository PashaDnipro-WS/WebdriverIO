import HomePage from '../pageobjects/pages/home.page.js'

const dropdowns = [
    {
        name: 'Products',
        open: () => HomePage.navbar.openProductsDropdown(),
        dropdown: () => HomePage.navbar.productsDropdown,
        cardsName: 'product'
    },
    {
        name: 'Solutions',
        open: () => HomePage.navbar.openSolutionsDropdown(),
        dropdown: () => HomePage.navbar.solutionsDropdown,
        cardsName: 'solution'
    },
    {
        name: 'Pricing',
        open: () => HomePage.navbar.openPricingDropdown(),
        dropdown: () => HomePage.navbar.pricingDropdown,
        cardsName: 'pricing'
    },
    {
        name: 'Why Telnyx',
        open: () => HomePage.navbar.openWhyTelnyxDropdown(),
        dropdown: () => HomePage.navbar.whyTelnyxDropdown,
        cardsName: 'Why Telnyx'
    },
    {
        name: 'Resources',
        open: () => HomePage.navbar.openResourcesDropdown(),
        dropdown: () => HomePage.navbar.resourcesDropdown,
        cardsName: 'resource'
    },
    {
        name: 'Developers',
        open: () => HomePage.navbar.openDevelopersDropdown(),
        dropdown: () => HomePage.navbar.developersDropdown,
        cardsName: 'developer'
    }
]

dropdowns.forEach(({ name, open, dropdown, cardsName }) => {
    describe(`Navbar ${name} Dropdown`, () => {
        beforeEach(async () => {
            await HomePage.open()
            await HomePage.cookies.acceptCookies()
            await open()
        })

        it(`should display ${name} dropdown content`, async () => {
            await dropdown().expectContentIsDisplayed()
        })

        it(`should show hover state for all ${cardsName} cards`, async () => {
            await dropdown().expectAllCardsHoverWorks()
        })
    })
})