import axios from "axios";

const AGENCY = "https://ams4you.net/amsapi/public/agencypanel/";
// https://ams4you.net/amsapi/public/agencypanel/

class ASettingServ {
  async PostPartnerBankInfo(payload) {
    return await axios.post(AGENCY + "PostPartnerBankInfo", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  async GetPartnerBankInfoList() {
    let URL = AGENCY + "GetPartnerBankInfoList";
    return axios.get(URL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}

export default new ASettingServ();
