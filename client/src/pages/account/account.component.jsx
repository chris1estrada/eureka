import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../hooks/useAuth'

const AccountPage = () => {
  const { user } = useAuth()
  const { bid } = useParams();
  const [connected, setConnected] = useState(false)
  useEffect(() => {
    const fetchAccount = async () => {
      const response = await axios.get(`/api/v1/accounts/businesses/${bid}`);
      setConnected(response.data);
    }

    // fetchAccount();
  }, [bid])

  return (
    <div>
      <h1>ACCOUNT PAGE {bid}</h1>
      <p>{connected}</p>
    </div>
  );
};

export default AccountPage;