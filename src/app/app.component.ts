import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public onClick(e: any, id: HTMLElement) {
    e.preventDefault();
    if (id) {
      id.scrollIntoView({ behavior: "smooth" });
    }
  }
}
