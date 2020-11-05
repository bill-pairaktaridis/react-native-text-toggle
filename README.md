# react-native-text-toggle

## How it looks
![](example.gif)

## Why does this exist?

I wanted a component that does exactly this and figured I could also open source it to help others

## To install simply run

`npm install text-toggler`

or

`yarn add text-toggler`

## To use

`import { TextToggler } from 'text-toggler'`

```javascript
<TextToggler 
options={['option 1', 'option 1',]} 
onToggle={(value) => console.log(value)} />
```

### You can also customize the look by using the following props

`containerStyle`

`textStyle`