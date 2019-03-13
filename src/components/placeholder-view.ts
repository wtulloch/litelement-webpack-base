import {LitElement, customElement, property, html, TemplateResult } from 'lit-element'

@customElement('placeholder-view')
export class PlaceholderView extends LitElement {
    @property({type:String})  
    message = 'Test message';
    @property()
    altMessage: string = '';

    render(): TemplateResult {
        return html`
            <style>
                :host {
                    padding: 5px;
                    border: 1px black solid;
                }
                .altText {
                    color: gray;
                }
            </style>
            <div>
                <h2>${this.message}</h2>
                <p class="altText">${this.altMessage}</p>
            </div>
        `;
    }

    // the following will render the component directly into the light dom.
    createRenderRoot()
    {
        return this;
    }

    connectedCallback(){
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

}