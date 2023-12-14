import { Content } from 'containers/Content/Content';
import { SideBarLeft } from 'containers/SideBar/SideBarLeft';
import { SideBarRight } from 'containers/SideBarRight/SideBarRight';

function App() {
  return (
    <div className="App">
      <SideBarLeft />
      <Content />
      <SideBarRight />
    </div>
  );
}

export default App;
