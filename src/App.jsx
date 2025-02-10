import 'bootswatch/dist/darkly/bootstrap.min.css'
import './App.css'
import Login from './screens/login/Login'
import CreateUser from './screens/createUser/CreateUser';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoutes from './main/AppRoutes';

function App() {
    return (
        <AppRoutes/>
    )
}

export default App;


// function App() {
//     return (
//         <Router basename='/dac-react-frontend'>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/createUser" element={<CreateUser />} />
//             </Routes>
//         </Router>
//     )
// }

// export default App;