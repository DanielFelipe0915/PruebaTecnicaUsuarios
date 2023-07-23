import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./barchart";
import { UserBox, UserComponent, UserDetails, UserImage } from "./styles";



interface User {
  login: string;
  id: number;
  avatar_url: string;
  followers: number;
}


const UserList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [followersData, setFollowersData] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [textButton, setTextButton] = useState("Mostrar");

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    textButton=="Mostrar" ? setTextButton("Ocultar") : setTextButton("Mostrar")
  };

  const boxStyle = {
    backgroundColor: 'white',
    opacity: isVisible ? 1 : 0, 
    height: isVisible ? 'auto' : '0vh',
    transition: isVisible ? 'opacity 0.5s ease-in-out' : 'none', 
    display:isVisible ? 'flex' : 'none',
  };

  useEffect(() => {
    const fetchInitialUsers = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users?since=0&per_page=10"
        );
        setUsers(response.data);
        setError("");
      } catch (error) {
        console.error("Error de consulta, no se puede traer la información de los usuarios:", error);
        setError("Error de consulta, no se puede traer la información de los usuarios");
      }
    };

    fetchInitialUsers();
  }, []); 

  useEffect(() => {
    // Consulta la informacion del numero de seguidores de cada usuario
    const fetchFollowersData = async () => {
      try {
        const followersPromises = users.map((user) =>
          axios.get(`https://api.github.com/users/${user.login}`)
        );
        const followersResponses = await Promise.all(followersPromises);
        const followersData = followersResponses.map(
          (response) => response.data.followers
        );
        setFollowersData(followersData);
      } catch (error) {
        console.error("No se puede consultar la informacion de los seguidores:", error);
        setError("No se puede consultar la informacion de los seguidores");
      }
    };

    fetchFollowersData();
  }, [users]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.toLowerCase().includes("doublevpartners")) {
      setError("no puede buscar'doublevpartners'.");
    } else {
      setSearchQuery(value);
      setError("");
    }
  };


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchQuery}&per_page=10`
        );
        setUsers(response.data.items);
        setError("");
      } catch (error) {
        console.error("Error en la consulta de los usuarios:", error);
        setError("Error en la consulta de los usuarios");
      }
    };

    if (searchQuery.length >= 4) {
      fetchUsers();
    } else if (searchQuery.length > 0) {
      setError("La consulta debe ser de 4 caracateres como minimo");
    } else {
      setUsers([]); // limpia la lista de usuarios cuando la busqueda esta vacia
      setError("");
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>User List</h1>
      <input
        type="search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Buscar usuarios"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={toggleVisibility}>{textButton}</button>
      <div style={boxStyle}>
      <BarChart  data={followersData} labels={users.map((user) => user.login)} />
      </div>
      <UserComponent>
        {users.map((user) => (
          <UserBox key={user.id}>
            <UserImage
              src={user.avatar_url}
              alt="Avatar"
            
            />
            <UserDetails>
            <span>Login: {user.login}</span>
            <span>ID: {user.id}</span> 
            <span> Seguidores: {user.followers}</span>
          </UserDetails>
          </UserBox>
        ))}
      </UserComponent>
    </div>
  );
};

export default UserList;