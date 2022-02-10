import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className='main_container'>
  <div className="container">
  {/* Start your React code here */}
  <div className='profile_image'>
    <img src={employee.profileImg} alt="person_photo" width="100" height="100"/>
    </div>
    <h1>{employee.name}</h1>
  <div className='profile_info'>
    <label>location</label>
    <strong>{employee.location}</strong>

  </div>
  <div className='profile_info'>
    <label>bloodgroup</label>
    <strong>{employee.bloodGroup}</strong>

  </div>
  <div className='profile_info'>
    <label>age</label>
    <strong>{employee.age}</strong>

  </div>


</div>
</div>
)
}



export default App;
