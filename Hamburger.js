import React, {Component} from 'react';
import {
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Hamburger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    spinCross() {
        if (!this.state.active) {
            Animated.spring(this.containerAnim, {
                toValue: 1,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBar, {
                toValue: .9,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: .9,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: -10,
                useNativeDriver: false
            }).start();
            Animated.spring(this.middleBarOpacity, {
                toValue: 0,
                duration: 30,
                useNativeDriver: false
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.containerAnim, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4,
                useNativeDriver: false
            }).start();
            Animated.timing(this.middleBarOpacity, {
                toValue: 1,
                duration: 600,
                useNativeDriver: false
            }).start();
        }
    }

    cross() {
        if (!this.state.active) {
            Animated.spring(this.topBar, {
                toValue: .9,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: .9,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: -10,
                useNativeDriver: false
            }).start();
            Animated.timing(this.middleBarOpacity, {
                toValue: 0,
                duration: 30,
                useNativeDriver: false
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.topBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4,
                useNativeDriver: false
            }).start();
            Animated.spring(this.middleBarOpacity, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: false
            }).start();
        }
    }


    spinArrow() {
        if (!this.state.active) {
            Animated.spring(this.containerAnim, {
                toValue: 1,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBar, {
                toValue: 1,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 1,
                useNativeDriver: false
            }).start();
            Animated.spring(this.width, {
                toValue: 14,
                useNativeDriver: false
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: -13,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 2,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: -2,
                useNativeDriver: false
            }).start();
        } else {
            Animated.spring(this.containerAnim, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.width, {
                toValue: 25,
                useNativeDriver: false
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: 0,
                useNativeDriver: false
            }).start();
        }
    }

    arrow() {
        if (!this.state.active) {
            Animated.spring(this.topBar, {
                toValue: 1,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 1,
                useNativeDriver: false
            }).start();
            Animated.spring(this.width, {
                toValue: 14,
                useNativeDriver: false
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: -13,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 2,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: -2,
                useNativeDriver: false
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.topBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.width, {
                toValue: 25,
                useNativeDriver: false
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4,
                useNativeDriver: false
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: 0,
                useNativeDriver: false
            }).start();
        }
    }


    _animate(active) {
        this.setState({active});
        const {props: {type}} = this;

        switch (type) {
            case "spinArrow":
                this.spinArrow();
                break;
            case "arrow":
                this.arrow();
                break;
            case "spinCross":
                this.spinCross();
                break;
            default:
                this.cross();
                break;
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            this._animate(nextProps.active);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                active: this.props.active
            });
        }, 0);
    }

    render() {

        const {props: {color, type}} = this;

        if (this.props.active) {
            if (type == "spinArrow") {
                this.containerAnim = this.containerAnim || new Animated.Value(1);
                this.topBar = this.topBar || new Animated.Value(1);
                this.bottomBar = this.bottomBar || new Animated.Value(1);
                this.width = this.width || new Animated.Value(14);
                this.marginLeft = this.marginLeft || new Animated.Value(-13);
                this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(2);
                this.topBarMargin = this.topBarMargin || new Animated.Value(-2);
            }
            else if (type == "arrow") {
                this.topBar = this.topBar || new Animated.Value(1);
                this.bottomBar = this.bottomBar || new Animated.Value(1);
                this.width = this.width || new Animated.Value(14);
                this.marginLeft = this.marginLeft || new Animated.Value(-13);
                this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(2);
                this.topBarMargin = this.topBarMargin || new Animated.Value(-2);
            }
            else if (type == "spinCross") {
                this.containerAnim = this.containerAnim || new Animated.Value(1);
                this.topBar = this.topBar || new Animated.Value(0.9);
                this.bottomBar = this.bottomBar || new Animated.Value(0.9);
                this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(-10);
                this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(0);
            }
            else {
                this.topBar = this.topBar || new Animated.Value(0.9);
                this.bottomBar = this.bottomBar || new Animated.Value(0.9);
                this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(-10);
                this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(0);
            }
        }

        this.containerAnim = this.containerAnim || new Animated.Value(0);
        this.topBar = this.topBar || new Animated.Value(0);
        this.bottomBar = this.bottomBar || new Animated.Value(0);
        this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(1);
        this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(4);
        this.topBarMargin = this.topBarMargin || new Animated.Value(0);
        this.marginLeft = this.marginLeft || new Animated.Value(0);
        this.width = this.width || new Animated.Value(25);

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.onPress ? this.props.onPress() : undefined
                }}>
                <Animated.View style={{
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 35,
                    transform: [
                        {
                            rotate: this.containerAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    '0deg', '360deg'
                                ],
                            }),
                        },
                        {
                            scale: this.props.scale,
                        }
                    ]
                }}>
                    <Animated.View style={{
                        height: 3,
                        marginLeft: this.marginLeft,
                        width: this.width,
                        marginBottom: this.topBarMargin,
                        backgroundColor: color ? color : 'black',
                        transform: [
                            {
                                rotate: this.topBar.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        '0deg', '-50deg'
                                    ],
                                })
                            }
                        ]
                    }}/>
                    <Animated.View style={{
                        height: 3,
                        width: 25,
                        opacity: this.middleBarOpacity,
                        backgroundColor: color ? color : 'black',
                        marginTop: 4,
                        marginLeft: this.props.active ? 3 : 0
                    }}/>
                    <Animated.View style={{
                        height: 3,
                        marginLeft: this.marginLeft,
                        width: this.width,
                        backgroundColor: color ? color : 'black',
                        marginTop: this.bottomBarMargin,
                        transform: [
                            {
                                rotate: this.bottomBar.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        '0deg', '50deg'
                                    ],
                                })
                            }
                        ]
                    }}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}
