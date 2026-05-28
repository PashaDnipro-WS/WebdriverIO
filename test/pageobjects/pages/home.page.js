import Page from './page.js';

import Navbar from '../components/navbar.component.js'
import CookiesComponent from '../components/cookies.component.js'
import fullStackSection from './home_page_sections/full-stack.section.js';
import agentRuntimeSection from './home_page_sections/agent-runtime.section.js';
import footerSection from './home_page_sections/footer.section.js';

class HomePage extends Page {

    navbar = Navbar
    cookies = CookiesComponent
    FullStackSection = fullStackSection
    AgentRuntimeSection = agentRuntimeSection
    FooterSection = footerSection

    get pageTitle() {
        return $('#hero-headline')
    }

    open() {
        return super.open('');
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }
}

export default new HomePage();
