const currentlyInfectedImpact = ({ reportedCases }) => reportedCases * 10;

const currentlyInfectedSevere = ({ reportedCases }) => reportedCases * 50;

const infectionsByRequestedTime = (currentlyInfected, { timeToElapse }) => {
  const factor = timeToElapse / 3;
  return Math.trunc(currentlyInfected * (Math.power(2, factor)));
};

const covid19ImpactEstimator = (data) => ({
  data, // the input data you got
  impact: {
    currentlyInfected: currentlyInfectedImpact(data),
    infectionsByRequestedTime: infectionsByRequestedTime(this.currentlyInfected, data)
  }, // your best case estimation
  severeImpact: {
    currentlyInfected: currentlyInfectedSevere(data),
    infectionsByRequestedTime: infectionsByRequestedTime(this.currentlyInfected, data)
  } // your severe case estimation
});

export default covid19ImpactEstimator;
