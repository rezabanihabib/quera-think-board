import Container from "./components/layouts/Container";
import Header from "./components/ui/Header";
import Loading from "./components/ui/Loading";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          {/* TODO: Form and Card Components */}
          <Loading />
        </Container>
      </main>
    </>
  );
}

export default App;
