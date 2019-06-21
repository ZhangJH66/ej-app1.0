import React from 'react'
import {connect} from 'dva'
import {withRouter,routerRedux} from 'dva/router'
import {NavBar, Icon,TabBar,Popover } from 'antd-mobile'
import styles from './App.css'

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;


class App extends React.Component {

  state = {
    visible: true,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
  });
}

  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'index',
      hidden: false,
      fullScreen: false,
    }
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <p>{pageText}</p>        
      </div>
    );
  }

  handlerTabChange = (tab)=>{
    console.log(this.props);
    this.setState({selectedTab: tab});
    switch(tab){
      case "index":
        this.props.dispatch(routerRedux.push({
          pathname: '/',
          query: {id: 1}
        }))
        break;
      case "order":
          this.props.dispatch(routerRedux.push({
            pathname: '/order',
            query: {id: 1}
          }))
          break;
      case "help":
        this.props.dispatch(routerRedux.push({
          pathname: '/help',
          query: {id: 1}
        }))
        break;
      case "my":
        this.props.dispatch(routerRedux.push({
          pathname: '/my',
          query: {id: 1}
        }))
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <div className={styles.app}>
        <div className={styles.content}>

        {/* 顶部导航栏 */}
        <div>
      <NavBar
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>帮助</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        e洁家政服务平台
      </NavBar>
    </div>


          {/* 动态路由 */}
          {
            this.props.children
          }
        </div>


          {/* 导航 */}
        <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="index"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(src/assets/首页.png) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(src/assets/首页1.png) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'index'}
                //badge={1}
                onPress={this.handlerTabChange.bind(this,'index')}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(src/assets/档案.png) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(src/assets/档案1.png) center center /  21px 21px no-repeat' }}
                  />
                }
                title="订单"
                key="order"
               // badge={'new'}
                selected={this.state.selectedTab === 'order'}
                onPress={this.handlerTabChange.bind(this,'order')}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(src/assets/客服.png) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(src/assets/客服1.png) center center /  21px 21px no-repeat' }}
                  />
                }
                title="帮助"
                key="help"
               // dot
                selected={this.state.selectedTab === 'help'}
                onPress={this.handlerTabChange.bind(this,'help')}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'src/assets/我的.png' }}
                selectedIcon={{ uri: 'src/assets/我的1.png' }}
                title="我的"
                key="my"
                selected={this.state.selectedTab === 'my'}
                onPress={this.handlerTabChange.bind(this,'my')}
              >
              </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
export default withRouter(connect()(App));