import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter/AppRouter';

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