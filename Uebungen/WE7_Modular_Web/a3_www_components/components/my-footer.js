import {LitElement, css, html} from 'lit-element';
// ++++++++++++++ footer design with 4 footer link items ++++++++++++++++++++++
// change item names in array to your personal menu item names
const footerItems = ['footer_item_1', 'footer_item_2', 'footer_item_3', 'footer_item_4'];
// change links to your items in footerLinks-Array
const footerLinks = ['link_for_item_1.html', 'link_for_item_2.html', 'link_for_item_3.html', 'link_for_item_4.html'];
class MyElement extends LitElement {

    static get properties() {
        return {
            footerItemNames: {type: Array}
        }
    }

    static get styles() {
        return css`
        .footer {
            background: #000000;
            color: white;
            font-size: 30px;
            text-align: center;
            bottom: 0;
            width: 100%;
        }
    
        .navlist_footer {
            display: inline-block;
            font-size: 10px;
            line-height: 0em;
            margin: 1.5em; 
        }
    
        .stylized_linkbox_footer {
            color: white;
        }
    
        .links_footer {
            color: white
        }
    `;
    }

    constructor() {
        super();
        this.footerItemsNames = footerItems;
    }

    render() {
        return html`
      <footer class="footer">
         <ul> 
           <li class="navlist_footer stylized_linkbox_footer">
           <a class=links_footer href=${footerLinks[0]}><h1 id="html">${this.footerItemsNames[0]}</h1></a>
           </li>
           <li class="navlist_footer stylized_linkbox_footer">
           <a class=links_footer href=${footerLinks[1]}><h1 id="css">${this.footerItemsNames[1]}</h1></a>
           </li>
           <li class="navlist_footer stylized_linkbox_footer">
           <a class=links_footer href=${footerLinks[2]}><h1 id="javascript">${this.footerItemsNames[2]}</h1></a>
           </li>
           <li class="navlist_footer stylized_linkbox_footer"">
           <a class=links_footer href=${footerLinks[3]}><h1>${this.footerItemsNames[3]}</h1></a>
           </li>
           </ul>
        </footer>
    `;
    }
}

customElements.define('my-footer', MyElement);