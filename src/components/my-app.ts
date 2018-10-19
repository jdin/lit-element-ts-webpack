import {html, LitElement, property} from '@polymer/lit-element';

class MyApp extends LitElement {

    @property({type: Number})
    private someNumber: number = 0;

    protected render() {
        console.log("render");
        return html`
            <h1>Hello Typescript!</h1>
            <button @click=${() => this.someNumber--}>Decrement</button>
            ${this.someNumber}
            <button @click=${() => this.someNumber++}>Increment</button>
        `;
    }
}

window.customElements.define('my-app', MyApp);
