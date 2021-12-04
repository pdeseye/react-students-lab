import './App.css';
import studentsArr from './Data.js'
import Students from './Students';


function App() {
    const students = studentsArr.map((ele, index) => {
      return(<Students 
        
      name = {ele.name}
      scores = {ele.scores}
      bio = {ele.bio}
      key = {index}
      />)

    })

return (
  <div className="App">{students}</div>
)
}



export default App;