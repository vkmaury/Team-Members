
// import { useState }/ from 'react';
import './App.css';
import DevelopmentTeam from './Components/DevelopmentTeam';
import SalesTeam from './Components/SalesTeam';
import TeamMember from './Components/TeamMember';
// import img1 from './images/person.png';

function App() {
  // const [teamMember,setTeamMember]=useState([
  //   {
  //     img:{img1},
  //     name:'Founder Name',
  //     position:'Founder/CEO',

  //   },
  //   {
  //     img:{img1},
  //     name:'Founder Name',
  //     position:'Founder/CEO',

  //   },
  //   {
  //     img:{img1},
  //     name:'VP Name',
  //     position:'VP, Development & Growth',

  //   },
  //   {
  //     img:{img1},
  //     name:'VP Name',
  //     position:'VP, Sales & Monitering',

  //   },
  //   {
  //     img:{img1},
  //     name:'VP Name',
  //     position:'VP, Finance & Operation',

  //   },
    
    

  // ])
 
  return (
    <div className="App">
      <TeamMember/>
      <DevelopmentTeam/>
      <SalesTeam/>
    </div>
  );
}

export default App;
