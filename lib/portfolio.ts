export type Portfolio = {
  uri: string;
  season: number;
  level: string;
  award: string;
  awardPlace: number;
  teamName: string;
  teamNumber: number;
};

/**
 * Returns a Portfolio object
 *
 * @remarks
 * This method creates a portfolio object when given a JSON object that follows the Portfolio Schema
 *
 * @param portfolio - Portfolio object
 * @returns Portfolio object
 */
export default class PortfolioFactory {
  port: Portfolio;

  constructor(portfolio: Portfolio) {
    this.port = portfolio;
  }

  getURI(): string {
    return this.port.uri;
  }

  getSeason(): number {
    return this.port.season;
  }

  getLevel(): string {
    return this.port.level;
  }

  getAward(): string {
    return this.port.award;
  }

  getPlacing(): number {
    return this.port.awardPlace;
  }

  getTeamNumber(): number {
    return this.port.teamNumber;
  }

  getTeamName(): string {
    return this.port.teamName;
  }
}
