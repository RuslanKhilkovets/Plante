import Footer from './components/globals/Footer/Footer';
import Header from './components/globals/Header/Header';
import AppRouter from './router/AppRouter/AppRouter';

import './App.css';

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <AppRouter/>

      </main>
      <Footer />
    </>
  )
};

export default App;