import axios from "axios";

const STU = "https://ams4you.net/amsapi/public/studentpanel/";

class SLoginService {
  async Login(payload) {
    return await axios
      .post(STU + "PostLogin", payload, {
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
  async GetStudentInfo() {
    let URL = STU + "GetAgencyInfo?Agent=uniapplynow";
    return axios.get(URL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
  PostResetPassword(payload) {
    return axios.post(STU + "PostResetPassword", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}
export default new SLoginService();
