import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();

  //this will return true is our route matches with '/'
  const match = useMatch('/');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    //if user is not in homepage, redirect to homapage
    if (!match) {
      navigate('/');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
