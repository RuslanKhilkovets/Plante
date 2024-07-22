import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UpdatesForm from './components/UpdatesForm/UpdatesForm';
import AppRouter from './router/AppRouter/AppRouter';

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <AppRouter/>

      </main>
      <UpdatesForm />
      <Footer />
    </>
  )
};

export default App;