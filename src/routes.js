import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import NodeList from './pages/NodeList';
import NodeDetail from './pages/NodeDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/node-list" component={NodeList} />
      <Route path="/node-detail" component={NodeDetail} />
    </BrowserRouter>
  )
}