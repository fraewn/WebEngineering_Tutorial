import {LitElement, css, html} from 'lit-element';

// ++++++++++++++ easy red header design ++++++++++++++++++++++
class MyHeader extends LitElement {
    static get properties() {
        return {
        }
    }
    static get styles() {
        return css`
        header {
            background: #c14f4f;
            color: white;
            text-align: left;
            font-size: 60px;
            line-height: 0.6em;
            height: 160px;
            margin: 0em;
            margin-top: -50px;
            padding: 0em;
            top: 0;
            width: 100%;
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
        }
    `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
      <header class="header">
      </header>
    `;
    }
}

customElements.define('my-header', MyHeader);