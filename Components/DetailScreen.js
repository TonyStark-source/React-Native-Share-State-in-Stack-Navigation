import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  onPress() {
    console.log(this.props.route.params)
    const receivedValue = this.props.route.params.receivedValue
    receivedValue('Hello from Detail')
    this.props.navigation.goBack('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        {/* <TextInput
          value={'a'}
          onChangeText={(value) =>)}
        /> */}
        <Button title="Back to Home" onPress={() => this.onPress()} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
