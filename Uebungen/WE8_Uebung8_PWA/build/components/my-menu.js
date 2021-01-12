import {LitElement, css, html} from 'lit-element';

// ++++++++++++++ flexibly alterable menu design with four items ++++++++++++++++++++++
// change css`inline-block` to `block` for a vertical item design
const display = css`inline-block`;
// change item names in array to your personal menu item names
const menuItems = ['menu_item_1', 'menu_item_2', 'menu_item_3', 'menu_item_4'];

class MyMenu extends LitElement {
    static get properties() {
        return {
            menuItemNames: {type: Array},
            ordered_style: {type:String}
        }
    }

    static get styles() {
        return css`
            .navlist {
                display: ${display};
            }

            .stylized_linkbox {
                background-color: #6a709f;
                border: 3px solid white;
                border-radius: 10px;
                color: white;
                border-color: black;
                width: \t10%;
                line-height: 5px;
                text-align: center;
                margin: 1em; 
            }

            .links {
                color: #000000;
                text-decoration: none;
                font-size: 13px;
                font-weight: inherit;
            }
    `;
    }

    constructor() {
        super();
        this.menuItemsNames = menuItems;
    }

    render() {
        return html`
      <header class="header">
         <ul> 
           <li class="navlist stylized_linkbox">
           <a class=links><h1 id="html">${this.menuItemsNames[0]}</h1></a>
           </li>
           <li class="navlist stylized_linkbox">
           <a class=links><h1 id="css">${this.menuItemsNames[1]}</h1></a>
           </li>
           <li class="navlist stylized_linkbox">
           <a class=links><h1 id="javascript">${this.menuItemsNames[2]}</h1></a>
           </li>
           <li class="navlist stylized_linkbox">
           <a class=links href="staff.html"><h1>${this.menuItemsNames[3]}</h1></a>
           </li>
           </ul>
        </header>
    `;
    }
}

customElements.define('my-menu', MyMenu);