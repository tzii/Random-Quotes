import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { HashRouter as Router } from "react-router-dom";

function App() {
    const [random, setRandom] = useState(Date.now());
    return (
        <Router>
            <Header setRandom={setRandom} />
            <Main random={random} />
            <Footer />
        </Router>
    );
}

export default App;
