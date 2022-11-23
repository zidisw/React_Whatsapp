import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="backgroundWeb">
      <div className="containerWeb">
        <div className="">
          {/* Navbar */}
          <Navbar />
          {/* Search */}
          <Search />
          {/* Contacts */}
          <Contacts />
        </div>
        {/* Chats */}
        <Chats />
      </div>
    </div>
  );
}

export default App;
