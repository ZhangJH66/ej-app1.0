import React from 'react'
import { Tabs, WhiteSpace,Badge} from 'antd-mobile';




class OrderPage extends React.Component {

  render(){

    const tabs = [
      { title: <Badge dot>全部订单</Badge> },
      { title: <Badge dot>待处理</Badge> },
      { title: <Badge dot>待评价</Badge> },
      { title: <Badge dot>待服务</Badge> },
    ];
    
    // const tabs2 = [
    //   { title: 'First Tab', sub: '1' },
    //   { title: 'Second Tab', sub: '2' },
    //   { title: 'Third Tab', sub: '3' },
    // ];
    
    const TabExample = () => (
      <div>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px', backgroundColor: '#fff' }}>
            您还没有订单！
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px', backgroundColor: '#fff' }}>
            您还没有待处理的订单
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px', backgroundColor: '#fff' }}>
            您还没有待评价的订单
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px', backgroundColor: '#fff' }}>
            您还没有待服务的订单
          </div>
        </Tabs>
        <WhiteSpace />
        {/* <Tabs tabs={tabs2}
          initialPage={1}
          tabBarPosition="bottom"
          renderTab={tab => <span>{tab.title}</span>}
        > */}
          {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div> */}
        {/* </Tabs> */}
        <WhiteSpace />
      </div>
    );
    return(
      <div>
        
        <TabExample>
        </TabExample>
        </div>
    )
  }
}

export default OrderPage;