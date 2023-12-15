import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PortfolioComponent,
    CommonModule,
    RouterModule],
})
export class AppComponent {
  constructor(private route: ActivatedRoute) {}

  title = 'angular-inked8';
}
