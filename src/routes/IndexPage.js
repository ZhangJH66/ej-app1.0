import React from 'react';
import { connect } from 'dva';
import t from '../assets/index.png'
import styles from './IndexPage.css'
import axios from '../utils/axios'
import { NavBar, Icon,Grid  } from 'antd-mobile';


const data1 = Array.from(new Array(6)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
  }
));



class IndexPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[]
    }

    
  }

  // 当前组件绑定到根组件上执行【生命周期钩子】
  componentDidMount(){
    this.loadCategory();
  }
  

  loadCategory(){
    axios.get('/category/findAll')
    .then((result)=>{
      // 将数据设置到局部状态中
      this.setState({
        categories:result.data
      })
    });
  }

  toProduct(){
    this.props.history.push("/product");
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
          >e洁家政服务平台</NavBar>
        </div>

        
        {/* 图片广告 */}
        <div className={styles.photoWall}>
          <img className={styles.photo} src={t}/>
        </div>
        {/* 栏目 */}

        <div className="sub-title"></div>
           <Grid data={data1} isCarousel onClick={_el => console.log(_el)} />
        


        {/* 产品 */}
        <div>


        </div>
      </div>
    );
  }
}

// connect函数可以在this.props中注入一些对象和方法增强组件功能
export default connect()(IndexPage);
