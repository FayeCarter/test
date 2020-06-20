import React, { useEffect, useState }  from 'react'
import cookie from 'react-cookies'

const Join = () => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const getUserData = async (token) => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const parseData = await response.json();
      setUserName(parseData.display_name);
      setAvatar(parseData.images[0].url)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect( () => {
    const token = cookie.load('access_token')
    getUserData(token)
  }, [])

  return (
    <div className="Join">
      <h1>User</h1>
      <p>{userName}</p>
      <img src={avatar}/>
    </div>
  )
}
      
export default Join
