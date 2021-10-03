import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import ClientsList from 'components/organisms/ClientsList/ClientList';
import CarsList from 'components/organisms/CarsList/CarsList';
import MechanicsList from 'components/organisms/MechanicsList/MechanicList';
import ClientForm from 'components/organisms/ClientForm/ClientForm';
import MechanicsForm from 'components/organisms/MechanicsForm/MechanicsForm';
import CarForm from 'components/organisms/CarForm/CarForm';
import RepairsList from 'components/organisms/RepairsList/RepairsList';
import RepairForm from 'components/organisms/RepairForm/RepairForm';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Redirect to="/repairs" />
              </Route>
              <Route path="/repairs/add">
                <RepairForm />
              </Route>
              <Route path="/repairs">
                <RepairsList />
              </Route>
              <Route path="/cars/add">
                <CarForm />
              </Route>
              <Route path="/cars">
                <CarsList />
              </Route>
              <Route path="/clients/add">
                <ClientForm />
              </Route>
              <Route path="/clients">
                <ClientsList />
              </Route>
              <Route path="/mechanics/add">
                <MechanicsForm />
              </Route>
              <Route path="/mechanics">
                <MechanicsList />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
