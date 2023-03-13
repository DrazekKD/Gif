import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBar from "./components/SearchBar";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <SearchBar />
      </div>
    </QueryClientProvider>
  );
}

export default App;
