import MyOtherSpan from "./components/MyOtherSpan"
import MySpan from "./components/MySpan"
import DataProvider from "./context/myContext"

function App() {
  return (
    <DataProvider>
      <MySpan/>
      <MyOtherSpan/>
    </DataProvider>
  )
}

export default App
