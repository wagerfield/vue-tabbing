# Vue Tabbing

1. Adds a reactive `$tabbing` boolean property to [Vue instances][vue-instances].
2. Adds a `tabbing` class to the root `html` node while the user is tabbing.

This is useful for conditionally rendering or styling content when the user is navigating with the tab key. Think accessibility.

    yarn add vue-tabbing

## Setup

```js
import Vue from "vue"
import VueTabbing from "vue-tabbing"

Vue.use(VueTabbing, { /* options */ })
```

## Options

| Key       | Type   | Default   | Description                                                                                                            |
| :-------- | :----- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| className | String | "tabbing" | Class name to add to the root `html` node when the user navigating using the tab key.<br>Pass `false` to prevent a class from being set. |

## Usage

Conditionally style content in focus:

```scss
.tabbing :focus {
  outline: 3px solid #4fc08d;
  outline-offset: 3px;
}
```

Conditionally render content in a component:

```vue
<template>
  <p>{{$tabbing ? 'Nice' : 'Try'}} tabbing.</p>
</template>
```

## Author

[Matthew Wagerfield][github]

## License

[MIT][mit]

[vue-instances]: https://vuejs.org/v2/guide/instance
[mit]: https://opensource.org/licenses/MIT
[github]: https://github.com/wagerfield
