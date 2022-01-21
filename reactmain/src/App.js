import './App.css';
import { registerMicroApps, start } from 'qiankun';
import Layout from './layout/index'
// import { Layout, Menu, Breadcrumb } from 'antd';

// const { Header, Content, Footer } = Layout;
registerMicroApps([
  {
    name: 'react1',
    entry: '//localhost:5001',
    container: '#container',
    activeRule: '/react',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // },
  // {
  //   name: 'angularApp',
  //   entry: '//localhost:4200',
  //   container: '#container',
  //   activeRule: '/app-angular',
  // },
]);
// 启动 qiankun
start();

function App() {
  const handleClick = (id) => {
    window.history.pushState(null, null, id === 1 ? '/react' : '/vue')
  }
  return (
    <Layout>
      
    </Layout>
  );
}

export default App;
