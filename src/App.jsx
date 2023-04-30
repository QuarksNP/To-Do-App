import Background from "./components/Background/Background"
import Header from "./components/Header/Header"
import TodoList from "./components/TodoList/TodoList"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <main className="relative">
      <Background />
      <Header />
      <TodoList />
      <Footer />
    </main>
  )
}

export default App
