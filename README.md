# react-native-animated-hamburger
Animated fully configurable hamburger menu for react-native!
![alt tag](gif/hamburger.gif)

## Installation
NPM
```bash
npm install react-native-animated-hamburger --save
```

Yarn
```bash
npm add react-native-animated-hamburger
```

## Usage
```javascript
...
import Hamburger from 'react-native-animated-hamburger';
...
<Hamburger type="cross" active={this.state.active} onPress={() => {
              this.setState({ active: !this.state.active })
          }}
          style={{marginLeft: 10}}
          underlayColor="transparent"
          >
 </Hamburger>
```

## Props
| Prop    | Description                                                               | Typ      | Default   |   |
|---------|---------------------------------------------------------------------------|----------|-----------|---|
| type    | Type of Animation   Available types: {arrow, spinArrow, cross, spinCross} | String   | cross     |   |
| onPress | Called when the hamburger gets pressed                                    | Function | undefined |   |
| active  | Determines the activation state of Hamburger.                             | Boolean  | false     |   |


*this repository is a fork of `react-native-hamburger`*
