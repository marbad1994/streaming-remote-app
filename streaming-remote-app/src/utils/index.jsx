import { createContext, useState } from "react";

export const IpContext = createContext({
    ipAddress: undefined,
    updateIpAddress: undefined,
  });

export const IpContextProvider = ({ children }) => {
    const [ipAddress, setIpAddress] = useState(undefined);
  
    const updateIpAddress = (value) => {
        setIpAddress(value);
    };
  
    return (
      <IpContext.Provider value={{ipAddress, updateIpAddress}}>
        {children}
      </IpContext.Provider>
    );
};

export const keyCommand = (key, ipAddress) => {
    fetch(`http://${ipAddress}:4040/api/v1/key-command/${key}`)
}

export const cursorCommand = (key, ipAddress) => {
  fetch(`http://${ipAddress}:4040/api/v1/cursor-command/${key}`)
}

export const scrollCommand = (key, ipAddress) => {
  fetch(`http://${ipAddress}:4040/api/v1/scroll-command/${key}`)
}

export const netflixSearch = (search_term, ipAddress) => {
  fetch(`http://${ipAddress}:4040/api/v1/netflix-search/${search_term}`)
}