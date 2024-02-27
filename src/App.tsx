import { useState } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { light, dark, Theme } from './theme';
import store from './store'
import Header from './components/Header/Header';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(dark);

  return (
    <Provider store={store}>
      <ThemeProvider theme={selectedTheme}>
        <Header
          dark={dark}
          light={light}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />
        <About />
        <Tech />
        <Education />
        <Experience />
        <Projects />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
