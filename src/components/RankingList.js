import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  head: {
    height: 40,
    backgroundColor: '#004b97',
  },
  text: {
    margin: 6,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
  },
  headText: {
    fontSize: 22,
    margin: 6,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#d2e9ff',
  },
};

class RankingList extends Component {
  state = {
    tableHead: ['排名', '暱稱', '競賽分數'],
    tableData: [
      [1, '林伯伯', 80],
      [2, '王阿姨', 78],
      [3, '呂大叔', 76],
      [4, '黃先生', 75],
      [5, '陳大姐', 70],
      [6, '廖叔公', 69],
      [7, '簡小姐', 67],
      [8, '蘇叔叔', 65],
      [9, '胡麻降', 63],
      [10, '蔡仕長', 60],
      [11, '馬玲淑', 57],
      [12, '徐磊', 50],
      [13, '黃中興', 49],
      [14, '余人美', 40],
      [15, '許雅蓉', 36],
    ],
    // widthArr: [65, 90, 110, 84],
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#f0f0f0' }}>
          <Row
            data={this.state.tableHead}
            widthArr={this.state.widthArr}
            style={styles.head}
            textStyle={styles.headText}
          />
        </Table>

        <ScrollView style={styles.dataWrapper}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#f0f0f0' }}>
            {this.state.tableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={this.state.widthArr}
                style={[
                  styles.row,
                  index % 2 && { backgroundColor: '#66b3ff' },
                ]}
                textStyle={styles.text}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    );
  }
}

export default RankingList;
