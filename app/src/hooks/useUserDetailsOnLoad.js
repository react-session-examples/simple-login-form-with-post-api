import React, { useEffect, useState } from 'react';

function useUserDetails() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    console.log('page loaded'); // Mount Phase

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          setUserDetails(json);
        }, 5000); // 5 seconds delay
      });
  }, []);

  return userDetails;
}

export default useUserDetails;