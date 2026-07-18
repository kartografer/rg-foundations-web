import { Component, OnInit, inject } from '@angular/core'
import { RouterModule, Router, NavigationEnd } from '@angular/router'
import { CommonModule } from '@angular/common'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class AppComponent implements OnInit {
  isHome = true
  private router = inject(Router)

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHome = event.urlAfterRedirects === '/'
      })
  }
}
