import React from 'react'
import { NavBar,Toast, WhiteSpace, WingBlank,Icon,Button} from 'antd-mobile';
import styles from './MyPage.css'
import x from '../assets/my.jpg'
import { Link } from "react-router-dom";


const data1 = Array.from(new Array(6)).map((_val, i) => ({
  icon: 'http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E5%83%8F%E5%8F%AF%E7%88%B1&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=1795925258,2756957540&os=1353890984,1037941873&simid=0,0&pn=15&rn=1&di=40370&ln=1680&fr=&fmq=1560849798265_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.52z.com%2Fupload%2Fnews%2Fimage%2F20190108%2F20190108104946_64542.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined',
  text: `name${i}`,
  }
));


function showToast() {
  
  Toast.info('联系我们 0471-1234-888 ', 5);
}

class MyPage extends React.Component {
 
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
    >首页</NavBar>
</div>
   
    <div className={styles.placeholder}>
     <img className={styles.photo} src={x}/>
   </div>
   <Button inline size="small" style={{ marginRight: '4px' }} className={styles.btns1}>账户余额</Button>
    <Button inline size="small" style={{ marginRight: '4px' }} className={styles.btns2}>充值</Button>
  
    <div>

    <Button><Link to="/address">常用地址</Link></Button>
    <WingBlank>
        <WhiteSpace />
        <Button onClick={showToast} icon="../assets/dizhi.jpg">联系我们</Button>
        <WhiteSpace />
        
      </WingBlank>

  

        </div>
    </div>
    
    )
   
  }
}
export default MyPage;


