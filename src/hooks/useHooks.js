import { useEffect, useState } from "react";

const useHooks = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const [position, setUsePosition] = useState("");
  useEffect(() => {
    setUsePosition(position);
  },[position])

  return [service, setService, position, setUsePosition];
};

export default useHooks;
