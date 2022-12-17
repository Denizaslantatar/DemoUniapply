import axios from "axios";

const AGENT = "https://ams4you.net/amsapi/public/agencypanel/";

class ALoginService {
  async Login(payload) {
    return await axios
      .post(AGENT + "PostLoginAgency", payload, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((err) => {
        return {
          status: err.response.status,
          msg: err.message,
        };
      });
  }
  async GetPartnerInfo() {
    let URL = AGENT + "GetPartnerCurrentUserInfo";
    return axios.get(URL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
  PostResetPasswordAgency(payload) {
    return axios.post(STU + "PostResetPasswordAgency", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}
export default new ALoginService();
