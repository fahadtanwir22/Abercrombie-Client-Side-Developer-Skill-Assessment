const { fireEvent, getByText } = require('@testing-library/dom');
const domlibrary = require('@testing-library/jest-dom/extend-expect')
const { JSDOM } = require('jsdom');
const fs = require("fs");
const path = require("path");
global.fetch = require('jest-fetch-mock')

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body;
        userDetail = dom.window.document.body;
    })

    it('renders a heading element',  () => {
        expect(container.querySelector('h2')).not.toBeNull()
        expect(getByText(container, 'User List')).toBeInTheDocument();
    })
   
})



