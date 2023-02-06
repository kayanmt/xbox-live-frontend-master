import { Service } from "../../abstract/service-interface";

export class ClockUpdateUseCase implements Service {
  public execute(): void {
    function startTime(): void {
      const today = new Date();
      const hour = today.getHours();
      let minute = today.getMinutes();
      let second = today.getSeconds();
      minute = checkTime(minute);
      second = checkTime(second);
      const clock = document.getElementById("header-clockDiv-clock");
      if (clock) {
        clock.innerHTML = hour + ":" + minute + ":" + second;
        setTimeout(startTime, 500);
      }
    }
    function checkTime(i: any): number {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    startTime();
  }
}
