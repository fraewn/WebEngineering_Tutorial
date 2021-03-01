import { html } from 'lit-html';
import './my-header.css'

export const MyHeader = ({title}) => {
    return html`
         <header class="my-header">
         <div class="title">${title}</div>
      </header>`
};

