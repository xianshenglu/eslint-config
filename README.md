# @xianshenglu/eslint-config

![](https://img.shields.io/npm/v/@xianshenglu/eslint-config.svg)

ESLint config

## Usage

### For Javascript project

```bash
npm install --save-dev @xianshenglu/eslint-config eslint-plugin-import@2.22.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config/javascript"
  ]
}
```

### For Javascript-Vue project

```bash
npm install --save-dev @xianshenglu/eslint-config eslint-plugin-import@2.22.1 eslint-plugin-vue@7.0.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config/javascript-vue"
  ]
}
```

### For Javascript-React project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react@^7.20.0 eslint-plugin-react-hooks@^4.1.2
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config/javascript-react"
  ]
}
```

### For Typescript project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config eslint-plugin-import@2.22.1 @typescript-eslint/eslint-plugin@4.4.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config/typescript"
  ]
}
```

### For Typescript-Vue project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config eslint-plugin-import@2.22.1 eslint-plugin-vue@7.0.1 @typescript-eslint/eslint-plugin@4.4.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config/typescript-vue"
  ]
}
```

### For Typescript-React project [Untested]

```bash
npm install --save-dev @xianshenglu/eslint-config eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react@^7.20.0 eslint-plugin-react-hooks@^4.1.2 @typescript-eslint/eslint-plugin@4.4.1
```

Then, add `eslint-config` to the `extends` array in your _.eslintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/eslint-config/typescript-react"
  ]
}
```

## Compatibility

- `@xianshenglu/eslint-config-vue` 0.1.0 can be migrated to `@xianshenglu/eslint-config` and use the `@xianshenglu/eslint-config/javascript-vue` config.
- `@xianshenglu/eslint-config-vue` 0.2.0 can be migrated to `@xianshenglu/eslint-config`. They are equal except that the default config of `@xianshenglu/eslint-config-vue` has to be migrated to `@xianshenglu/eslint-config/javascript-vue`.
