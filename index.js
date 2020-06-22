/**
 * - More conditions, just implement everything from protractor: 
 * https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
 * - Handle elementProvider errors and possible conditions errors
 * - debug mode with errors logging
 * - Sometheng elso?
 */

/**
 * 
 * @param {Function | string} 
 */
function receiveElement(element) {
    switch (typeof element) {
        case 'string':
            return $(element)
        case 'function':
            return element()
        default:
            throw new Error(`Type of element "${typeof element}" is not supported. Only strings or functions that return elements are allowed`)
    }

}


// Mostly taken from https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/lib/until.js
const ExpectedConditions = {
    not: (condition) => () => !condition(),
    // and(conditions) {
    //     // TODO:
    //     return () => {
    //         let bool = conditions()
    //         return !bool
    //     }
    // },
    // or(condition) {
    //     // TODO:
    //     return () => {
    //         let bool = condition()
    //         return !bool
    //     }
    // },
    // ableToSwitchToFrame: function ableToSwitchToFrame(frame) {
    //     // TODO:
    //     var condition;
    //     if (typeof frame === 'number' || frame instanceof webdriver.WebElement) {
    //         condition = driver => attemptToSwitchFrames(driver, frame);
    //     } else {
    //         condition = function (driver) {
    //             let locator = /** @type {!(By|Function)} */(frame);
    //             return driver.findElements(locator).then(function (els) {
    //                 if (els.length) {
    //                     return attemptToSwitchFrames(driver, els[0]);
    //                 }
    //             });
    //         };
    //     }

    //     return new Condition('to be able to switch to frame', condition);

    //     function attemptToSwitchFrames(driver, frame) {
    //         return driver.switchTo().frame(frame).then(
    //             function () { return true; },
    //             function (e) {
    //                 if (!(e instanceof error.NoSuchFrameError)) {
    //                     throw e;
    //                 }
    //             });
    //     }
    // },


    /**
     * Creates a condition that waits for an alert to be opened. Upon success, the
     * returned promise will be fulfilled with the handle for the opened alert.
     *
     * @return {!Condition<!./webdriver.Alert>} The new condition.
     */
    // alertIsPresent: function alertIsPresent() {
    //     // TODO:
    //     return new Condition('for alert to be present', function (driver) {
    //         return driver.switchTo().alert().catch(function (e) {
    //             if (!(e instanceof error.NoSuchAlertError
    //                 // XXX: Workaround for GeckoDriver error `TypeError: can't convert null
    //                 // to object`. For more details, see
    //                 // https://github.com/SeleniumHQ/selenium/pull/2137
    //                 || (e instanceof error.WebDriverError
    //                     && e.message === `can't convert null to object`)
    //             )) {
    //                 throw e;
    //             }
    //         });
    //     });
    // },


    /**
     * Creates a condition that will wait for the current page's title to match the
     * given value.
     *
     * @param {string} title The expected page title.
     * @return {!Condition<boolean>} The new condition.
     */
    // titleIs: function titleIs(title) {
    //     // TODO:
    //     return new Condition(
    //         'for title to be ' + JSON.stringify(title),
    //         function (driver) {
    //             return driver.getTitle().then(function (t) {
    //                 return t === title;
    //             });
    //         });
    // },


    /**
     * Creates a condition that will wait for the current page's title to contain
     * the given substring.
     *
     * @param {string} substr The substring that should be present in the page
     *     title.
     * @return {!Condition<boolean>} The new condition.
     */
    // titleContains: function titleContains(substr) {
    //     // TODO:
    //     return new Condition(
    //         'for title to contain ' + JSON.stringify(substr),
    //         function (driver) {
    //             return driver.getTitle().then(function (title) {
    //                 return title.indexOf(substr) !== -1;
    //             });
    //         });
    // },


    /**
     * Creates a condition that will wait for the current page's title to match the
     * given regular expression.
     *
     * @param {!RegExp} regex The regular expression to test against.
     * @return {!Condition<boolean>} The new condition.
     */
    // titleMatches: function titleMatches(regex) {
    //     // TODO:
    //     return new Condition('for title to match ' + regex, function (driver) {
    //         return driver.getTitle().then(function (title) {
    //             return regex.test(title);
    //         });
    //     });
    // },


    /**
     * Creates a condition that will wait for the current page's url to match the
     * given value.
     *
     * @param {string} url The expected page url.
     * @return {!Condition<boolean>} The new condition.
     */
    // urlIs: function urlIs(url) {
    // TODO:
    //     return new Condition(
    //         'for URL to be ' + JSON.stringify(url),
    //         function (driver) {
    //             return driver.getCurrentUrl().then(function (u) {
    //                 return u === url;
    //             });
    //         });
    // },


    /**
     * Creates a condition that will wait for the current page's url to contain
     * the given substring.
     *
     * @param {string} substrUrl The substring that should be present in the current
     *     URL.
     * @return {!Condition<boolean>} The new condition.
     */
    // urlContains: function urlContains(substrUrl) {
    // TODO:
    //     return new Condition(
    //         'for URL to contain ' + JSON.stringify(substrUrl),
    //         function (driver) {
    //             return driver.getCurrentUrl().then(function (url) {
    //                 return url && url.indexOf(substrUrl) !== -1;
    //             });
    //         });
    // },


    /**
     * Creates a condition that will wait for the current page's url to match the
     * given regular expression.
     *
     * @param {!RegExp} regex The regular expression to test against.
     * @return {!Condition<boolean>} The new condition.
     */
    // urlMatches: function urlMatches(regex) {
    // TODO:
    //     return new Condition('for URL to match ' + regex, function (driver) {
    //         return driver.getCurrentUrl().then(function (url) {
    //             return regex.test(url);
    //         });
    //     });
    // },


    /**
     * Creates a condition that will loop until an element is
     * {@link ./webdriver.WebDriver#findElement found} with the given locator.
     *
     * @param {!(By|Function)} locator The locator to use.
     * @return {!WebElementCondition} The new condition.
     */
    // elementLocated: function elementLocated(locator) {
    //     locator = by.checkedLocator(locator);
    //     let locatorStr =
    //         typeof locator === 'function' ? 'by function()' : locator + '';
    //     return new WebElementCondition('for element to be located ' + locatorStr,
    //         function (driver) {
    //             return driver.findElements(locator).then(function (elements) {
    //                 return elements[0];
    //             });
    //         });
    // },


    /**
     * Creates a condition that will loop until at least one element is
     * {@link ./webdriver.WebDriver#findElement found} with the given locator.
     *
     * @param {!(By|Function)} locator The locator to use.
     * @return {!Condition<!Array<!./webdriver.WebElement>>} The new
     *     condition.
     */
    // elementsLocated: function elementsLocated(locator) {
    //     locator = by.checkedLocator(locator);
    //     let locatorStr =
    //         typeof locator === 'function' ? 'by function()' : locator + '';
    //     return new Condition(
    //         'for at least one element to be located ' + locatorStr,
    //         function (driver) {
    //             return driver.findElements(locator).then(function (elements) {
    //                 return elements.length > 0 ? elements : null;
    //             });
    //         });
    // },


    /**
     * Creates a condition that will wait for the given element to become stale. An
     * element is considered stale once it is removed from the DOM, or a new page
     * has loaded.
     *
     * @param {!./webdriver.WebElement} element The element that should become stale.
     * @return {!Condition<boolean>} The new condition.
     */
    // stalenessOf: function stalenessOf(element) {
    //     return new Condition('element to become stale', function () {
    //         return element.getTagName().then(
    //             function () { return false; },
    //             function (e) {
    //                 if (e instanceof error.StaleElementReferenceError) {
    //                     return true;
    //                 }
    //                 throw e;
    //             });
    //     });
    // },


    /**
     * Creates a condition that will wait for the given element to become visible.
     *
     * @param {!./webdriver.WebElement} element The element to test.
     * @return {!WebElementCondition} The new condition.
     * @see ./webdriver.WebDriver#isDisplayed
     */
    elementIsVisible: (element) => {
        return () => {
            return receiveElement(element).isDisplayed()
        }
    },


    /**
     * Creates a condition that will wait for the given element to be in the DOM,
     * yet not visible to the user.
     *
     * @param {!./webdriver.WebElement} element The element to test.
     * @return {!WebElementCondition} The new condition.
     * @see ./webdriver.WebDriver#isDisplayed
     */
    elementIsNotVisible(element) {
        return this.not(this.elementIsVisible(element));
    },


    /**
     * Creates a condition that will wait for the given element to be enabled.
     *
     * @param {!./webdriver.WebElement} element The element to test.
     * @return {!WebElementCondition} The new condition.
     * @see webdriver.WebDriver#isEnabled
     */
    // elementIsEnabled: function elementIsEnabled(element) {
    // TODO:
    //     return new WebElementCondition('until element is enabled', function () {
    //         return element.isEnabled().then(v => v ? element : null);
    //     });
    // },


    /**
     * Creates a condition that will wait for the given element to be disabled.
     *
     * @param {!./webdriver.WebElement} element The element to test.
     * @return {!WebElementCondition} The new condition.
     * @see webdriver.WebDriver#isEnabled
     */
    // elementIsDisabled = function elementIsDisabled(element) {
    // TODO: 
    //     return new WebElementCondition('until element is disabled', function () {
    //         return element.isEnabled().then(v => v ? null : element);
    //     });
    // },


    /**
     * Creates a condition that will wait for the given element to be selected.
     * @param {!./webdriver.WebElement} element The element to test.
     * @return {!WebElementCondition} The new condition.
     * @see webdriver.WebDriver#isSelected
     */
    // elementIsSelected: function elementIsSelected(element) {
    // TODO:
    //     return new WebElementCondition('until element is selected', function () {
    //         return element.isSelected().then(v => v ? element : null);
    //     });
    // },


    /**
     * Creates a condition that will wait for the given element to be deselected.
     *
     * @param {!./webdriver.WebElement} element The element to test.
     * @return {!WebElementCondition} The new condition.
     * @see webdriver.WebDriver#isSelected
     */
    // elementIsNotSelected: function elementIsNotSelected(element) {
    //     return new WebElementCondition('until element is not selected', function () {
    //         return element.isSelected().then(v => v ? null : element);
    //     });
    // },


    /**
     * Creates a condition that will wait for the given element's
     * {@link webdriver.WebDriver#getText visible text} to match the given
     * {@code text} exactly.
     *
     * @param {!./webdriver.WebElement} element The element to test.
     * @param {string} text The expected text.
     * @return {!WebElementCondition} The new condition.
     * @see webdriver.WebDriver#getText
     */
    // elementTextIs = function elementTextIs(element, text) {
    // TODO:
    //     return new WebElementCondition('until element text is', function () {
    //         return element.getText().then(t => t === text ? element : null);
    //     });
    // },


    /**
     * Creates a condition that will wait for the given element's
     * {@link webdriver.WebDriver#getText visible text} to contain the given
     * substring.
     *
     * @param {string} substr The substring to search for.
     * @return {!WebElementCondition} The new condition.
     * @see webdriver.WebDriver#getText
     */
    elementTextContains: function elementTextContains(element, substr) {
        return () => {
            return receiveElement(element).getText().includes(substr)
        }
    },


    /**
     * Creates a condition that will wait for the given element's to match a regular
     * expression.
     *
     * @param {!RegExp} regex The regular expression to test against.
     */
    elementTextMatches: function elementTextMatches(element, regex) {
        return () => {
            return new RegExp(regex).test(regereceiveElement(element).getText())
        }
    }
}


module.exports.ExpectedConditions = ExpectedConditions;
module.exports.EC = ExpectedConditions;