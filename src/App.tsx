import BookPage from "./pages/bookPage"
import Home from "./pages/home"
import { useSearchStore } from "./store/useSearchStore"

function App() {
  const query = useSearchStore((s) => s.query)

  return (
    <>
      <Home />
      {query && <BookPage />}
    </>
  )
}

export default App
