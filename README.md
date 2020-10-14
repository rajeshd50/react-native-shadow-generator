# react-native-shadow-generator

Generate shadows for react-native android/ios in a single helper function easily!

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/npm) or [yarn](https://yarnpkg.com/) to install react-native-shadow-generator.

```bash
yarn add react-native-shadow-generator
```
or 
```bash
npm install react-native-shadow-generator --save
```


## Usage

```node
import { generateShadow } from 'react-native-shadow-generator'

const myStyle = {
  ...generateShadow(5) // you can pass 1 to 24
}
```

it will generate an object like this
```node
myStyle = {
 shadowColor: "#000",
 shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
}
```

Makes life a little bit easier!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)

