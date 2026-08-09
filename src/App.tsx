import Container from "./components/layouts/Container";
import NoteList from "./components/notes/NoteList";
import Header from "./components/ui/Header";
import Loading from "./components/ui/Loading";
import notes from "./data/notes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <NoteList notes={notes} />
          <Loading />
        </Container>
      </main>
    </>
  );
}

export default App;
