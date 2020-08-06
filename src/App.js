import React from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {Container, Header, Button, Input} from 'semantic-ui-react'

import { TypeChooser } from "react-stockcharts/lib/helper";

import Chart from './Chart';
import { getData } from "./utils"

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

function App() {
  return (
    <div style={{padding: 20}} className="App">
      <Container>
        <Header style={{fontSize: 70}}>deeprofit</Header>
        <Input size="massive" icon='chart' placeholder='Input a stock...'>
        </Input>
        <Button size="massive">Go</Button>
        <p></p>
      <ChartComponent/>
      </Container>
    </div>
  );
}

export default App;
