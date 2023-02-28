import { Container } from '@mui/material';
import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
import Services from './components/Services';

function App() {
  const [category, setCategory] = useState('all')
  
  return (
    <Container maxWidth="sm">
      <Header setCategory={setCategory} category={category} />
      <Main>
        <Services category={category} />
      </Main>
    </Container>
  );
}

export default App;
