import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div className="text-center">
            <header className="bg-gray-800 min-h-screen flex flex-col align-center justify-center text-3xl text-white">
                <img
                    src={logo}
                    className="pointer-events-none h-96 App-logo"
                    alt="logo"
                />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="text-blue-300"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
