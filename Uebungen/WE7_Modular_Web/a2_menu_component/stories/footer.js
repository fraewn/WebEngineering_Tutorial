import { html } from 'lit-html';
import './footer.css'

export const Footer = ({footerItem0, footerItem1, footerItem2, footerItem3, footerLink0,
                         footerLink1, footerLink2, footerLink3, author, date}) => {
    return html`
         <footer class="footer">
         <ul> 
           <li class="navlist_footer stylized_linkbox_footer">
           <a class=links_footer href=${footerLink0}><h1 id="html">${footerItem0}</h1></a>
           </li>
           <li class="navlist_footer stylized_linkbox_footer">
           <a class=links_footer href=${footerLink1}><h1 id="css">${footerItem1}</h1></a>
           </li>
           <li class="navlist_footer stylized_linkbox_footer">
           <a class=links_footer href=${footerLink2}><h1 id="javascript">${footerItem2}</h1></a>
           </li>
           <li class="navlist_footer stylized_linkbox_footer"">
           <a class=links_footer href=${footerLink3}><h1>${footerItem3}</h1></a>
           </li>
           </ul>
           <div class="authorship">&copy; ${author} (${date})</div>
        </footer>`
};

