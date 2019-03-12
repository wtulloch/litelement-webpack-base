import { customElement, LitElement, CSSResult, css, TemplateResult, html } from "lit-element";

@customElement('test-slot-view')
export class TestSlotView extends LitElement {

    static get styles(): CSSResult {
        return css `
            :host {
                display: inline-block;
                position: relative;
                padding: 5px;
            }
        `;
    }

    render(): TemplateResult {
        return html `
            <div>
                <slot @slotchange="${() => this.requestUpdate()}"></slot>
            </div>
        `;
    }

    createRenderRoot(){
        const root = super.createRenderRoot();
        return root;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

}