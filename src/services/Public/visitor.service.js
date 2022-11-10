import axios from "axios";

const STU = "https://ams4you.net/amsapi/public/studentpanel/";

class VisitorService {
  async GetVisitorToken() {
    return await axios
      .get(STU + "GetAcaCountryChange?Agent=uniapplynow&CountryId=1")
      .catch((err) => {
        return {
          status: err.response.status,
          msg: err.message,
        };
      });
  }
}

export default new VisitorService();
