import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AccountPage = () => {
  const { display_name } = useParams();
  const [connected, setConnected] = useState(false)
  useEffect(() => {
    const fetchAccount = async () => {
      const response = await axios.get(`/api/v1/accounts/${display_name}`);
      setConnected(response.data);
    }

    fetchAccount();
  }, [display_name])

  return (
    <div>
      <h1>ACCOUNT PAGE {display_name}</h1>
      <p>{connected}</p>
    </div>
  );
};

export default AccountPage;