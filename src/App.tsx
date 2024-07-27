import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
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