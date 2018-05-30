# ⚡ Supports.js
> Supports.js is a fast, lightweight and dependency-free feature-detection library. It's the best way to check a user's browser for those features that your latest projects make use of.

The aim of Supports.js is to make feature-detection quick and painless. Import what you need, and leave the rest. Everything returns a Boolean, for ease-of-use.

## Getting Started

### In the browser

```html
<script src="supports.min.js"></script>
```
```javascript
if (supports.touchevents) {
  console.log('Touch events supported');
}
```

### Using npm

```shell
$ npm i Supports.js
```
```javascript
import supports from 'Supports.js';

if (supports.touchevents) {
  console.log('Touch events supported');
}
```

## API Reference

### Methods:

#### supports.one(args)
* `args` <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>>
* returns: <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> `true` if ***at least one*** feature in the array is supported by the browser.

Example:
```javascript
supports.one(['websqldatabase', 'webworkers', 'serviceworker']);
```

#### supports.each(args)
* `args` <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>>
* returns: <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> `true` if ***every*** feature in the array is supported by the browser.

Example:
```javascript
supports.each(['geolocation', 'touchevents', 'canvas']);
```

### Properties:

```javascript
supports.canvas
supports.classlist
supports.devicemotion
supports.deviceorientation
supports.fetch
supports.filereader
supports.geolocation
supports.history
supports.matchmedia
supports.serviceworkers
supports.touchevents
supports.webgl
supports.webgl2
supports.websqldatabase
supports.webworkers
```
> ***NOTE** Supports.js checks to see if Touch events are supported within a device browser. It relies on the browser to detect if touch support is available. It does **NOT** check to see if the device itself is a touch device.*

## License 

Supports.js uses the [MIT license](https://opensource.org/licenses/MIT)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request