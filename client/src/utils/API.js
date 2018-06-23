import axios from "axios";

export default {
  // Gets all Users
  getAllPlayers: function() {
    return axios.get("/api/players");
  },
  // Gets the user with the given id
  get: function(id) {
    return axios.get("/api/players/" + id);
  },
  // For saving players, not sure if needed
  // savePlayer: function(UserData) {
  //   return axios.post("/api/players", UserData);
  // }
};
