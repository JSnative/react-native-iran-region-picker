import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, AppRegistry } from 'react-native';
import IranRegionWheelPicker from './lib/index';

export default class IranRegionModalPickerTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region1: '',
            isPickerVisible: false,
            region2: ''
        };
    }

    _onPress2Show() {
        this.setState({ isPickerVisible: true });
    }
    _onPressCancel() {
        this.setState({ isPickerVisible: false });
        console.log('cancel');
    }
    _onPressSubmit(params) {
        this.setState({ isPickerVisible: false });
        this.setState({ region2: `${params.province},${params.city},${params.area}` });
    }

    render() {
        return (
            <View style={styles.container}>
              <IranRegionWheelPicker
                  onSubmit={(params) => this.setState({ region1: `${params.province},${params.city},${params.area}` })}
                  onCancel={() => console.log('cancel')}
              >
                <TextInput
                    style={{ backgroundColor: '#FFF', width: 200, paddingVertical: 20, textAlign: 'center' }}
                    editable={false}
                    placeholder="انتخاب محله"
                    value={this.state.region1}
                />
              </IranRegionWheelPicker>


              <IranRegionWheelPicker
                  isVisible={this.state.isPickerVisible}
                  navBtnColor={'red'}
                  selectedProvince={'تهران'}
                  selectedCity={'تهران'}
                  selectedArea={'تجریش'}
                  transparent
                  animationType={'fade'}
                  onSubmit={this._onPressSubmit.bind(this)}
                  onCancel={this._onPressCancel.bind(this)}
              />

              <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ marginTop: 50, backgroundColor: 'red', padding: 10, borderRadius: 6 }}
                  onPress={this._onPress2Show.bind(this)}
              >
                <Text style={{ color: 'white' }}>{this.state.region2 || 'انتخاب محله' }</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E1E1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => IranRegionModalPickerTest);
