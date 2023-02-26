import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
import Services from './components/Services';

export interface serviceProps {
  all: boolean,
  haircuts: boolean,
  makeUp: boolean,
  manicure: boolean,
}

function App() {
  const [servicesFilter, setServicesFilter] = useState<serviceProps>()
  
  return (
    <Container maxWidth="sm">
      <Header setServicesFilter={setServicesFilter} />
      <Main>
        <Services servicesFilter={servicesFilter} />
      </Main>
    </Container>
  );
}

export default App;
