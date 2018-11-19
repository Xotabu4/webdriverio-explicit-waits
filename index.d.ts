/// <reference types="webdriverio" />

let wdioClient: WebdriverIO.Client<P>
let wdioElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> & WebdriverIO.RawResult<WebdriverIO.Element>

export function waitFor(condition: () => boolean, timeout?: number, timeoutMsg?: string, interval?: number)
export function waitFor(condition: () => Promise<boolean>, timeout?: number, timeoutMsg?: string, interval?: number)

export class ExpectedConditions {
    not(condition: () => boolean)
    not(condiiton: () => Promise<boolean>)

    visibilityOf(elementProvider: () => wdioClient)
    visibilityOf(elementProvider: () => wdioElement)

    invisibilityOf(elementProvider: () => wdioClient)
    invisibilityOf(elementProvider: () => wdioElement)

    textToBe(elementProvider: () => wdioClient, text: string)
    textToBe(elementProvider: () => wdioElement, text: string)
}
