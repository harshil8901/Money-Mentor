import mutualData from "../data/mutual";
const findMutualFund = (value, query) => {
  let filterData = null;
  if (value == 10) {
    filterData = mutualData.filter((data) => {
      return data.return_percentage_last_year > query;
    });
  }

  if (value == 20) {
    if (query < 12) {
      filterData = mutualData.filter((data) => {
        return data.type == "debt";
      });
    } else if (query >= 12) {
      filterData = mutualData.filter((data) => {
        return data.type == "equity" || data.type == "hybrid";
      });
    }
  }

  if (value == 30) {
    if (query == "LOW") {
      filterData = mutualData.filter((data) => {
        return data.type == "debt";
      });
    }
    if (query == "HIGH") {
      filterData = mutualData.filter((data) => {
        return data.type == "equity" || data.type == "hybrid";
      });
    }
  }

  if (value == 40) {
    if (query == "DEBT") {
      filterData = mutualData.filter((data) => {
        return data.type == "debt";
      });
    } else if (query == "EQUITY") {
      filterData = mutualData.filter((data) => {
        return data.type == "equity";
      });
    } else if (query == "HYBRID") {
      filterData = mutualData.filter((data) => {
        return data.type == "hybrid";
      });
    }
  }

  return filterData;
};

export default findMutualFund;
