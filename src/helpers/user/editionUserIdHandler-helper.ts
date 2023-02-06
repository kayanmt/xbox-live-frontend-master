export class EditionUserIdHandler {
  public storeUserId(userEmail: string): void {
    localStorage.setItem("editionUserId", userEmail);
  }

  public removeUserId(): void {
    localStorage.removeItem("editionUserId");
  }

  public getUserId(): string {
    return localStorage.getItem("editionUserId") || "";
  }
}
