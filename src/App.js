import { useState } from 'react';
import './App.css';
import AddList from './AddList';
import Modal from './Modal';
const data = [
  {
    id: 1,
    title: "C",
    startDate: "20/02/2021"
  },
  {
    id: 2,
    title: "Java",
    startDate: "12/12/2022"
  },
  {
    id: 3,
    title: "JavaScript",
    startDate: "29/07/2023"
  },
]

function App() {
  const [list, setList] = useState(data)
  const [showModal, setShowModal] = useState(false);
  const handleDelete = (id) => {
    const filteredList = list.filter(item => item.id !== id)
    setList(filteredList)
  }

  return (
    <div className="App">
      {
        list.map(item =>(
          <div onClick={()=> handleDelete(item.id)} key={item.id} className='card'>
            <h2>{item.title}</h2>
            <p>{item.startDate}</p>
          </div>
        ))
      }
      <div className='btn_container'>
      <button onClick={(e) => setShowModal(true)}>Add List</button>
      </div>
      

      {
        showModal && <Modal>
                      <AddList setList={setList} setShowModal={setShowModal} />
                      <button onClick={(e) => setShowModal(false)}>Close Modal</button>
                    </Modal>
      }
    </div>
  );
}

export default App;