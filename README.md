# react-native-text-toggle

## How it looks
![](example.gif)

## Why does this exist?

I wanted a component that does exactly this and figured I could also open source it to help others

## To install simply run

`npm install react-native-text-toggle`

or

`yarn add react-native-text-toggle`

## To use

`import TextToggler from 'react-native-text-toggle`

```javascript
<TextToggler 
options={['option 1', 'option 1',]} 
onToggle={(value) => console.log(value)} />
```

### You can also customize the look by using the following props

`containerStyle`

`textStyle`