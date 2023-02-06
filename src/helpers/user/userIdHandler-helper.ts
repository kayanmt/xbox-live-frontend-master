export class UserIdHandler {
  public storeUserId(userEmail: string): void {
    localStorage.setItem("loggedUserId", userEmail);
  }

  public removeUserId(): void {
    localStorage.removeItem("loggedUserId");
  }

  public getUserId(): string {
    return localStorage.getItem("loggedUserId") || "";
  }
}
