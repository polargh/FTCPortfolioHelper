import PortfolioFactory, { Portfolio } from "./portfolio";

const portfolios: PortfolioFactory[] = [];

createPortfolio({
  uri: "",
  teamName: "",
  teamNumber: 0,
  level: "",
  season: 0,
  award: "",
  awardPlace: 0,
});

/**
 * Pushes to the portfolios array
 *
 * @remarks
 * This function initiates a new PortfolioFactory instance and pushes it to the portfolio array
 *
 * @param portfolio - Portfolio object
 * @returns Pushes to the array
 */
function createPortfolio(portfolio: Portfolio) {
  const pushablePort = new PortfolioFactory(portfolio);
  portfolios.push(pushablePort);
}
