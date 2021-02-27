import { html } from 'lit-html';
import './menu.css'

export const Menu = ({alignment, menuItem0, menuItem1, menuItem2, menuItem3}) => {
        return html`
        <header>
         <ul> 
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox">
           <a class=storybook-links><h1 id="html">${menuItem0}</h1></a>
           </li>
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox">
           <a class=storybook-links><h1 id="css">${menuItem1}</h1></a>
           </li>
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox">
           <a class=storybook-links><h1 id="javascript">${menuItem2}</h1></a>
           </li>
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox">
           <a class=storybook-links href="staff.html"><h1>${menuItem3}</h1></a>
           </li>
           </ul>
        </header>`
};

