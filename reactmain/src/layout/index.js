import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
function Index(){
  const handleClick = (id) => {
    window.history.pushState(null, null, id === 1 ? '/react' : '/vue')
  }
  return (
    <Layout className="layout">
        <Header style={{ padding: '20px',textAlign: 'center' }}>
          <div onClick={() => handleClick(1)}>react-sub</div>
          <div onClick={() => handleClick(2)}>vue-sub</div>
        </Header>
        <Content style={{ padding: '50px',textAlign: 'center' }}>
          <div id="container" className="content"></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default Index;
