import { Content } from 'libs/components/Content/Content';
import { SideBar } from 'libs/components/SideBar/SideBar';
import { SideBarRight } from 'libs/components/SideBarRight/SideBarRight';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Content />
      <SideBarRight />
    </div>
  );
}

export default App;
