import {LitElement, customElement, property, html, TemplateResult } from 'lit-element'

@customElement('placeholder-view')
export class PlaceholderView extends LitElement {
    @property({type:String})  
    message = "Test message";

    render(): TemplateResult {
        return html`
            <style>
                :host {
                    padding: 5px;
                    border: 1px black solid;
                }
            </style>
            <div>
                <h2>${this.message}</h2>
            </div>
        `;
    }

    connectedCallback(){
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

}