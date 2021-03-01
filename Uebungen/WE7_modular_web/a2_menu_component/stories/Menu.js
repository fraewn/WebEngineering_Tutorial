import { html } from 'lit-html';
import './menu.css'

export const Menu = ({alignment, menuItem0, menuItem1, menuItem2, menuItem3, backgroundColor, color}) => {
        return html`
        <header>
         <ul> 
           <li 
           class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox" 
           style="background-color: ${backgroundColor}; border-color: ${color};">
                <a class=storybook-links><h1 style="color: ${color}">${menuItem0}</h1></a>
           </li>
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox"
           style="background-color: ${backgroundColor}; border-color: ${color};">
           <a class=storybook-links><h1 style="color: ${color}">${menuItem1}</h1></a>
           </li>
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox"
           style="background-color: ${backgroundColor}; border-color: ${color};">
           <a class=storybook-links><h1 style="color: ${color}">${menuItem2}</h1></a>
           </li>
           <li class="${`storybook-navlist--${alignment}`} storybook-stylized_linkbox"
           style="background-color: ${backgroundColor}; border-color: ${color};">
           <a class=storybook-links href="staff.html" style="color: ${color}"><h1>${menuItem3}</h1></a>
           </li>
           </ul>
        </header>`
};

