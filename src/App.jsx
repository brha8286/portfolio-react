import React from 'react';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { Footer } from './components/Footer';

const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  main: {
    flex: 1,
  }
};

function App() {
  return (
    <div style={styles.pageWrapper}>
      <Header color={"rgb(175,0,0)"} fontSize={12}>
        Hello World
      </Header>
      <Homepage style={styles.main}/>
      <Footer />
    </div>
  );
}

export default App;
