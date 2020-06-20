import React, { useEffect, useState }  from 'react'

const User = ({authToken}) => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const getUserData = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
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
    getUserData()
  }, [])

  return (
    <div className="User">
      <h1>User</h1>
      <p className="username">{userName}</p>
      <img src={avatar}/>
    </div>
  )
}
      
export default User
