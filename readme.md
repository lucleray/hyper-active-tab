## hyper-active-tab

Add a symbol to the `▲ active tab` in your hyper terminal.

* Simple configuration in `.hyper.js`
* Compatible with any theme

<div align="center">
<p>
<img alt="demo" src="demo/default.png" width="500px" />
</p>
</div>

### Install

`hyper i hyper-active-tab`

### Configure symbol

Add a line to your hyper configuration (`~/.hyper.js`) :

```js
module.exports = {
  config: {
    // rest of the config
    activeTab: '🍕'
  }
  // rest of the file
}
```

<div align="center">
<p>
<img alt="demo pizza emoji" src="demo/pizza.png" width="500px" />
</p>
</div>

### Configure symbol and color

```js
module.exports = {
  config: {
    // rest of the config
    activeTab: {
      symbol: '☀︎',
      color: 'yellow'
    }
  }
  // rest of the file
}
```

<div align="center">
<p>
<img alt="demo yellow sun" src="demo/yellow-sun.png" width="500px" />
</p>
</div>
