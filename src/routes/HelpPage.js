import React from 'react'
import { NavBar,Menu, Icon,ActivityIndicator,Grid,Tag,Accordion,List} from 'antd-mobile';
import styles from './HelpPage.css'

import dingdan from "../assets/dingdan.png"
import kefuduan from "../assets/kefuduan.png"
import youhui from "../assets/youhui.png"
import zhifu from "../assets/zhifu.png"
import shouhou from "../assets/shouhou.png"

const data = [{
  icon:dingdan,
  text: `订单相关`
},{
  icon:kefuduan,
  text: `客服端`
},{ 
  icon:youhui,
  text: `优惠劵`
},{
  icon:zhifu,
  text: `支付`
},{
  icon:shouhou,
  text: `售后处理`
}
]

class HelpPage extends React.Component {
  onChange = (key) => {
    console.log(key);
  }
  
  render(){
    
    return (
      
      <div>
       <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
    >使用帮助</NavBar>
     </div>
     
           <div className={styles.titlel}>常见问题</div>
      
   

       <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion className="myaccordion" onChange={this.onChange}>
          <Accordion.Panel header="1.优惠劵如何使用？" className="pad"> 请进入首页，可领取优惠劵 </Accordion.Panel>
          <Accordion.Panel header="2.取消订单后钱什么时候退？" className="pad">请您耐心等待，24个小时内会自动退给您！</Accordion.Panel>
          <Accordion.Panel header="3.可以固定同一个小姐姐服务吗？" className="pad"> 可以 </Accordion.Panel>
          <Accordion.Panel header="4.如何选择上一次服务的小姐姐？" className="pad"> 可以 </Accordion.Panel>
          <Accordion.Panel header="5.预约成功后在哪查看？" className="pad"> 请进入您的订单页面！ </Accordion.Panel>
        </Accordion>
      </div>
    
      <div className={styles.title}>更多问题</div>
      <div className="sub-title1"></div>
           <Grid data={data} isCarousel onClick={_el => console.log(_el)} />

 
    
   


  </div>

    )
  }
}

export default HelpPage;