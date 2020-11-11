# @xianshenglu/eslint-config-vue

![](https://img.shields.io/npm/v/@xianshenglu/eslint-config-vue.svg)

ESLint config

## Usage

### For Javascript project

```bash
npm install --save-dev @xianshenglu/eslint-config-vue eslint-plugin-import@2.22.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config-vue/javascript"
  ]
}
```

### For Javascript-Vue project

```bash
npm install --save-dev @xianshenglu/eslint-config-vue eslint-plugin-import@2.22.1 eslint-plugin-vue@7.0.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config-vue/javascript-vue"
  ]
}
```

### For Javascript-React project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config-vue eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react@^7.20.0 eslint-plugin-react-hooks@^4.1.2
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config-vue/javascript-react"
  ]
}
```

### For Typescript project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config-vue eslint-plugin-import@2.22.1 @typescript-eslint/eslint-plugin@4.4.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config-vue/typescript"
  ]
}
```

### For Typescript-Vue project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config-vue eslint-plugin-import@2.22.1 eslint-plugin-vue@7.0.1 @typescript-eslint/eslint-plugin@4.4.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config-vue/typescript-vue"
  ]
}
```

### For Typescript-React project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config-vue eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react@^7.20.0 eslint-plugin-react-hooks@^4.1.2 @typescript-eslint/eslint-plugin@4.4.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config-vue/typescript-react"
  ]
}
```

## Compatibility

Though the config of `@xianshenglu/eslint-config-vue` in 0.2 is equal to `@xianshenglu/eslint-config-vue/javascript-vue`, it will be depreciated in the future.
