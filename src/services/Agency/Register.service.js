import axios from "axios";

const AGENT = "https://ams4you.net/amsapi/public/agencypanel/";

class ARegisterService {
  async Register(payload) {
    return await axios.post(AGENT + "PostRegisterAgency", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
  GetRegisterAgency() {
    let URL = AGENT + "GetRegisterAgency";
    return axios.get(URL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}

export default new ARegisterService();


// GetRegisterAgency fonksiyonunu neden yazdığımızı anlamadım çünkü sitede kayıt olmayı denerken ben get ile ilgili bir bilgi göremedim.