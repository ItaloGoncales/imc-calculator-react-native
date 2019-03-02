/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
   TextInput,
   TouchableOpacity,
   StyleSheet,
   Text,
   View 
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""};
    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura);

    let c = this.state;

    c.resultado = imc;

    if (imc < 16) {
      c.resultadoText = "Magreza Grave";
    }
    else if (imc < 17) {
      c.resultadoText = "Magreza Moderada";
    }
    else if (imc < 18.5) {
      c.resultadoText = "Magreza Leve";
    }
    else if (imc < 25) {
      c.resultadoText = "Saudável";
    }
    else if (imc < 30) {
      c.resultadoText = "Sobrepeso";
    }
    else if (imc < 35) {
      c.resultadoText = "Obesidade Grau I";
    }
    else if (imc < 40) {
      c.resultadoText = "Obesidade Grau II";
    }
    else if (imc > 40) {
      c.resultadoText = "Obesidade Grau III";
    }

    this.setState(c);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => {this.setState({altura})}} />
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa) => {this.setState({massa})}} />
        </View>
        <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 20}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: "row",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 30,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#89ffa5"
  },
  buttonText: {
    alignSelf: "center",
    padding: 15,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold"
  },
  resultado:{
    alignSelf: "center",
    color: "lightgray",
    fontSize: 35,
    padding: 15,
  }
});
