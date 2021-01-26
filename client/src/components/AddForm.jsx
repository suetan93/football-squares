import React, {useState} from 'react';

const AddForm = ({ displayForm, addNewPlayer }) => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [initials, setInitials] = useState('');

  const handleSubmit = () => {
    if (firstName === '' || lastName === '' || initials === '') {
      alert('Missing fields')
      return
    }

    let newPlayer = {
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      initials: initials,
      count: 0,
      squares: {}
    }

    addNewPlayer(newPlayer)
    setFirst('')
    setLast('')
    setInitials('')
  }

  return (
    <div className="form">
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirst(e.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLast(e.target.value)} />
      </label>
      <br />
      <label>
        Initials:
        <input type="text"
          value={initials}
          placeholder="4 characters max"
          maxLength="4"
          onChange={(e) => setInitials(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Add Player</button> <button onClick={displayForm}>Cancel</button>

    </div>
  )
};

export default AddForm;