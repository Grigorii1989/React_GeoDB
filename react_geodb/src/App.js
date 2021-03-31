import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes"
import { DefaultLayout } from './components/layouts/defaultLayout.jsx'
import { FilmContextProvider } from './context/FilmContext';

function App() {
  return (
    <FilmContextProvider>
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            {routes.map(route => {
              return (
                <Route path={route.path} exact={route.exact}>
                  <route.component />
                </Route>
              )
            })}
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </FilmContextProvider>
  );
}

export default App;