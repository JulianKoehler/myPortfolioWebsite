const useLocalStorage = (itemName, method = "get", toBeStoredData = undefined) => {
  if (method === "get") return JSON.parse(localStorage.getItem(itemName));
  if (method === "set") localStorage.setItem(itemName, JSON.stringify(toBeStoredData));
};

export default useLocalStorage;
