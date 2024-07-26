import React from 'react'

const medications = [
  { name: 'Vitamin D', dosage: '50mg', date: '07/27/24' },
  { name: 'Amlodipine', dosage: '50mg', date: '07/27/24' },
  { name: 'Omeprazole', dosage: '50mg', date: '07/27/24' },
];

const Prescriptions = ({name, items}) => {
  return (
    <div className="medications-container">
      <h3 className="title">{name}</h3>
      <div className="medications-list">
        {items.map((item, index) => (
          <div key={index} className="medication-item">
            <div className="medication-name">{item.name}</div>
            <div className="medication-dosage">{item.quantity} mg</div>
            <div className="medication-date">{item.end_date.substring(0, 10)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prescriptions