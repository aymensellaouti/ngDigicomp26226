import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./components/navbar/navbar.component";
import { TestForm } from "./components/test-form/test-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, TestForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

}
