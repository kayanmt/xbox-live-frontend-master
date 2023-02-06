export class TokenHandler {
  public storeToken(token: string): void {
    localStorage.setItem("userAuthToken", token);
  }

  public removeToken(): void {
    localStorage.removeItem("userAuthToken");
  }

  public getAuthorization(): string {
    return `Bearer ${localStorage.getItem("userAuthToken")}`;
  }
}
