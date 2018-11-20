/**
 * - More conditions, just implement everything from protractor: 
 * https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
 * - Handle elementProvider errors and possible conditions errors
 * - debug mode with errors logging
 * - Sometheng elso?
 */


 /** 
 * @param {*} condition 
 * @param {*} timeout 
 * @param {*} timeoutMsg 
 * @param {*} interval 
 * @param {*} debug 
 */
function waitFor(condition, timeout, timeoutMsg, interval, debug = false) {
    return browser.waitUntil(() => {
        try {
            let res = condition()
            return res
        } catch (err) {
            return false
        }
    }, timeout, timeoutMsg, interval)
}

function receiveElement(elemProvider) {
    let res = elemProvider()
    if (Array.isArray(res)) {
        // TODO: Many elements found, handle more gracefully
        res = res[0]
    }
    return res
}

class ExpectedConditions {
    /**
     * 
     * @param {*} condition another condition to wrap and convert result
     */
    static not(condition) {
        return () => {
            let bool = condition()
            return !bool
        }
    }

    // static multiple(conditions) {
    //     return () => {
            
    //         let bool = condition()
    //         return !bool
    //     }
    // }

    // static or(condition) {
    //     return () => {
    //         let bool = condition()
    //         return !bool
    //     }
    // }

    static visibilityOf(elemProvider) {
        return () => {
            try {
                let elem = receiveElement(elemProvider)
                return elem.isVisible()
            } catch (err) {
                return false
            }
        }
    }

    static invisibilityOf(elemProvider) {
        return ExpectedConditions.not(() => {
            try {
                let elem = receiveElement(elemProvider)
                return elem.isVisible()
            } catch (err) {
                return false
            }
        })
    }

    /**
     * 
     * @param {*} elemProvider 
     * @param {*} text case sensitive! 
     */
    static textToBe(elemProvider, text) {
        return () => {
            try {
                let elem = receiveElement(elemProvider)
                let txtActual = elem.getText()
                return txtActual.includes(text)
            } catch (err) {
                return false
            }
        }
    }

}

module.exports.waitFor = waitFor;
module.exports.ExpectedConditions = ExpectedConditions