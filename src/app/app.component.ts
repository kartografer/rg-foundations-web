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
        this.isHome = !event.urlAfterRedirects.startsWith('/donate')
      })
    this.setJsonLdSchema()
  }

  private setJsonLdSchema() {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'RG Foundations, LLC',
      url: window.location.origin,
      logo: window.location.origin + '/assets/img/rgfoundationslogo.svg',
      description:
        'RG Foundations is an alternative educational setting built on individualized instruction, evidence-based strategies, and compassionate guidance for students with diverse learning needs.',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7000 SW 62nd Ave STE 407',
        addressLocality: 'South Miami',
        addressRegion: 'FL',
        postalCode: '33143',
        addressCountry: 'US',
      },
      telephone: '305-586-2953',
      email: 'info@rgfoundations.com',
      sameAs: ['https://www.instagram.com/rgfoundationslearning'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Student Enrollment',
        telephone: '305-586-2953',
        email: 'info@rgfoundations.com',
      },
      knowsAbout: [
        'Alternative Education',
        'Special Education',
        'Individualized Learning',
        'Behavior Analysis',
        'Evidence-Based Instruction',
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  }
}
