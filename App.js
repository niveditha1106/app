
import React, { useState } from 'react';
import welcome from './components/welcome';
import doctorsearch from './components/doctorsearch';
import doctorlist from './components/doctorlist';

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [username, setUsername] = useState('John'); // Set the user's name

  const handleDoctorSelect = (doctor) => {
  
    setSelectedDoctor(doctor);
  };

  
  const doctorsData = [
    { id: 1, name: 'Dr. Smith', specialty: 'Dental' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Dental' },
    {id:3,name:'Dr.Bennie',speciality:'Dental'},

  ];

  return (
    <div>
      <welcomeelcome username={username} />
      <div className="iphone-layout">
        <doctorsearch handleSearch={() => {}} handleDoctorSelect={handleDoctorSelect} selectedDoctor={selectedDoctor} />
    
        <doctorlist doctors={doctorsData} handleDoctorSelect={handleDoctorSelect} />
      </div>
    </div>
  );
};

export default App;
