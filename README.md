# webdriverio-explicit-waits

### Old-style collection of wait predicates for WebdriverIO. Will be convinient for people that pefer ExpectedConditions syntax

#### :warning: Currently for WebdriverIO SYNC mode only!


## Quick start

### Installing

```
npm i webdriverio-explicit-waits --save-dev
```

### Importing

```javascript
const { ExpectedConditions } = require('webdriverio-explicit-waits')
// Or, the same:
const { EC } = require('webdriverio-explicit-waits')
```

### Using

If you prerer style of pageobjects, where elements are in getter functions, make sure you are not calling getter function (wrap it into antoher function):
```javascript
class SomePageObject {
    get header() {
        return $('header')
    }
}
const page = new SomePageObject()
browser.waitUntil(EC.visibilityOf(() => page.header));
```

If your elements wrapped into regular functions, you don't need to wrap them additionaly:
```javascript
class SomePageObject {
    header() {
        return $('header')
    }
}
const page = new SomePageObject()
browser.waitUntil(EC.visibilityOf(page.header));
```

If you just store locators, you can pass string into predicate function, this string will be considered a locator. All webdriverio locators supported:

```javascript
class SomePageObject {
    constructor() {
        this.header = 'header'
    }
}
const page = new SomePageObject()
browser.waitUntil(EC.visibilityOf(page.header)); // string is fine too!
```


## Going deeper

### Passing wait params

Same set params as in webdriverio accepted (https://webdriver.io/docs/api/browser/waitUntil.html#parameters):
```javascript
browser.waitUntil(EC.visibilityOf('header'), { timeout, timeoutMsg, interval });
```

### API


Must read:
https://webdriver.io/docs/api/browser/waitUntil.html