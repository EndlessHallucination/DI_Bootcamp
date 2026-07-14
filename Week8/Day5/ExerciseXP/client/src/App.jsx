import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CharacterCounter from "./components/CharacterCounter";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider>
      <Content>
        <ThemeSwitcher />

        <hr />

        <CharacterCounter />
      </Content>
    </ThemeProvider>
  );
}

export default App;