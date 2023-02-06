export class GameIdHandler {
  public storeGameId(gameId: string): void {
    localStorage.setItem("selectedGameId", gameId);
  }

  public removeGameId(): void {
    localStorage.removeItem("selectedGameId");
  }

  public getGameId(): string {
    return localStorage.getItem("selectedGameId") || "";
  }
}
