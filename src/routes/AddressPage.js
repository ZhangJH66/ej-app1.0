import React from 'react'
import {List,Radio, NavBar,Icon,WhiteSpace, WingBlank,Button} from 'antd-mobile';
import styles from './AddressPage.css'

const RadioItem = Radio.RadioItem;


class AddressPage extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  onChange2 = (value) => {
    console.log('checkbox');
    this.setState({
      value2: value,
    });
  };
  render() {
    const { value} = this.state;
    const data = [
      { value: 0, label: '河南省郑州市高新区' },
      { value: 1, label: '辽宁省大连市金州区' },
      { value: 2, label: '山东省青岛' },
    ];
 

    return (
       <div >
       <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[

            <WingBlank>
              <Button className={styles.btons}>新增地址</Button><WhiteSpace />
              </WingBlank>
        ]}
    >常用地址</NavBar>
</div>
<List>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
     
      </div>
    );
  }
}

export default AddressPage;
