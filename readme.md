# ⚡ Supports.js
> Supports.js is a fast, lightweight and dependency-free feature-detection library. It's the best way to check a user's browser for those features that your latest projects need.

## Getting Started

### In the browser

```html
<script src="supports.min.js"></script>
```
```javascript
if (supports.touchevents) {
  ...
}
```

### Using npm

```shell
$ npm i Supports.js
```
```javascript
import supports from 'Supports.js';

if (supports.touchevents) {
  ...
}
```

## API Reference

### Methods:

#### supports.each(args)
* `args` <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>>
* returns: <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Checking if every feature in the array is supported.

Example:
```javascript
supports.each(['websqldatabase', 'sessionstorage', 'localstorage']);
```

### Properties:
```javascript
supports.canvas
supports.fetch
supports.geolocation
supports.localstorage
supports.queryselectorall
supports.sessionstorage
supports.touchevents
supports.websqldatabase
```
## License 

Supports.js uses the [MIT license](https://opensource.org/licenses/MIT)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request