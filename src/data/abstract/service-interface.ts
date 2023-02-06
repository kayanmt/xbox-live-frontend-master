export interface Service {
  execute(callbackFunction?: any): void | Promise<void>;
}
