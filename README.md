# webdriverio-explicit-waits



### Simple library that allows to wait for elements in webdriverio, not just string locators


```javascript
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

waitFor(EC.visibilityOf(()=> $('div.someClass')), 2000)
```


Originaly, webdriverIO does not support lazy elements pattern, so in PageObjects you need to write like this:


```javascript
class SomePageObject {
    get header() {
        return $('header')
    }
}
```

But this brings a problems when you want to wait for some element conditions:

```javascript
let somepage = new SomePageObject()
browser.waitForVisible(somepage.header) // ERROR! WebdriverIO accepts only strings in explicit wait methods!
```

So here is this lib comes:
```javascript
waitFor(EC.visibilityOf(somepage.header), 2000)
```

Another problem, even if you don't use getters, and store all your locators in strings,
sometimes you have containers, and you want to search your elements inside them:

```javascript
class SearchResults {
    container = 'div.container.searchresults'
    results = 'ul>li.result'
    title = '.title'
    description = '.description'
}
```

So if you want to wait for visible title in result number 5 (just example):

```javascript
let searchRes = new SearchResults()

waitFor(EC.visibilityOf(()=> {
    return $(searchRes.container).$$(searchRes.results)[5].$(searchRes.title)
    }), 2000)
```

And even easier with getters:
```javascript
let searchRes = new SearchResults()

waitFor(EC.visibilityOf(()=> searchRes.results(5).title), 2000, 'Result number 5 should have visible title')
```
- EC.visibilityOf
- EC.invisibilityOf
- EC.textToBe // check element contains text
- EC.not // flip boolean result of condition

TODO: List of methods and extend with more conditions