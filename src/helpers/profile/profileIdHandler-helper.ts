export class ProfileIdHandler {
  public storeProfileId(profileId: string): void {
    localStorage.setItem("selectedProfileId", profileId);
  }

  public removeProfileId(): void {
    localStorage.removeItem("selectedProfileId");
  }

  public getProfileId(): string {
    return localStorage.getItem("selectedProfileId") || "";
  }
}
