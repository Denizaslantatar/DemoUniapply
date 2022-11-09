import axios from "axios";

const AGENT = "https://ams4you.net/amsapi/public/agencypanel/";

class ALoginService {
  async Login(payload) {
    return await axios
      .post(AGENT + "PostLoginAgency", payload, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("vToken"),
        },
      })
      .catch((err) => {
        return {
          status: err.response.status,
          msg: err.message,
        };
      });
  }
}
export default new ALoginService();
