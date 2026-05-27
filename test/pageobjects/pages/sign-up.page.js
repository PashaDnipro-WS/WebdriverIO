import { $ } from '@wdio/globals'
import Page from './page.js';

class SignupPage extends Page {



    open() {
        return super.open('sign-up');
    }
}

export default new SignupPage();