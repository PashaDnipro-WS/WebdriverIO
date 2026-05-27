import Page from './page.js';

import Navbar from '../components/navbar.component.js'
import CookiesComponent from '../components/cookies.component.js'

class HomePage extends Page {

    navbar = Navbar
    cookies = CookiesComponent

    open() {
        return super.open('');
    }
}

export default new HomePage();