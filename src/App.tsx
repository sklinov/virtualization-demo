import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import { Home, RegularTable, VirtualizedTable } from "./components";
import "./App.css";
import "antd/dist/antd.css";
import { GeneratedDataProps, useGeneratedData } from "./hooks/useGeneratedData";

enum Paths {
  home = "/",
  regular = "/regular",
  virtualized = "/virtualized",
}

function App() {
  const [setting, setSetting] = useState<GeneratedDataProps>({
    maxColumns: 10,
    maxRows: 100,
  });

  const { columns, rows } = useGeneratedData({ ...setting });

  return (
    <div className="App">
      <Router>
        <Menu mode="horizontal">
          <Menu.Item key={Paths.home}>
            <Link to={Paths.home}>🏠 Home</Link>
          </Menu.Item>
          <Menu.Item key={Paths.regular}>
            <Link to={Paths.regular}>🐌 Regular</Link>
          </Menu.Item>
          <Menu.Item key={Paths.virtualized}>
            <Link to={Paths.virtualized}>⚡ Virtualized</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path={Paths.home}>
            <Home setSetting={setSetting} />
          </Route>
          <Route exact path={Paths.regular}>
            <RegularTable columns={columns} rows={rows} />
          </Route>
          <Route exact path={Paths.virtualized}>
            <VirtualizedTable columns={columns} rows={rows}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
