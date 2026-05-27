import { $ } from '@wdio/globals'
import Page from '../page.js';

import Navbar from '../../components/navbar.component.js'

class HomePage extends Page {

    navbar = Navbar

    open() {
        return super.open('');
    }
}

export default new HomePage();