import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'
import { environment } from '../../../environments/environment'

export interface BoardMember {
  id: string
  firstName: string
  lastName: string
  title: string
  role: string
}

export interface OrganizationValue {
  title: string
  description: string
  icon?: string
}

@Component({
  selector: 'app-friends-of-rg',
  templateUrl: './friends-of-rg.component.html',
  styleUrls: ['./friends-of-rg.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class FriendsOfRgComponent implements OnInit {
  private titleService = inject(Title)
  private metaService = inject(Meta)

  donationUrl = environment.donation?.externalPlatformUrl || '#'

  ngOnInit() {
    this.setMetaTags()
    this.setJsonLdSchema()
  }

  private setMetaTags() {
    // Set page title
    this.titleService.setTitle(
      'Friends of RG - Support Children on the Autism Spectrum | Donate'
    )

    // Remove existing meta tags and add new ones
    this.metaService.removeTag('name="description"')
    this.metaService.addTag({
      name: 'description',
      content:
        'Friends of RG Foundations provides financial aid, educational resources, and support to students with autism ages 5-12 in South Miami. Donate today to help them succeed.',
    })

    // Open Graph tags for social sharing
    this.metaService.removeTag('property="og:title"')
    this.metaService.addTag({
      property: 'og:title',
      content: 'Friends of RG - Support Children on the Autism Spectrum',
    })

    this.metaService.removeTag('property="og:description"')
    this.metaService.addTag({
      property: 'og:description',
      content:
        'THE FRIENDS OF RG FOUNDATIONS, INC. provides financial aid for tuition, educational resources, classrooms, and playground support for students with autism ages 5-12.',
    })

    this.metaService.removeTag('property="og:type"')
    this.metaService.addTag({
      property: 'og:type',
      content: 'website',
    })

    this.metaService.removeTag('property="og:url"')
    this.metaService.addTag({
      property: 'og:url',
      content: window.location.href,
    })

    // Twitter Card tags
    this.metaService.removeTag('name="twitter:card"')
    this.metaService.addTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    this.metaService.removeTag('name="twitter:title"')
    this.metaService.addTag({
      name: 'twitter:title',
      content: 'Friends of RG - Support Children on the Autism Spectrum',
    })

    this.metaService.removeTag('name="twitter:description"')
    this.metaService.addTag({
      name: 'twitter:description',
      content:
        'Support students with autism ages 5-12 in South Miami. Donate to Friends of RG Foundations for financial aid, educational resources, and classroom support.',
    })

    // Canonical URL
    this.metaService.removeTag('rel="canonical"')
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', window.location.href)
    document.head.appendChild(link)
  }

  private setJsonLdSchema() {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'NonprofitOrganization',
      name: 'Friends of RG Foundations, Inc.',
      url: window.location.origin + '/donate',
      logo: window.location.origin + '/assets/img/rgfoundationslogo.svg',
      description:
        'Friends of RG Foundations provides financial aid, educational resources, and comprehensive support to students with autism ages 5-12 years old in the South Miami area.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7000 SW 62nd Ave Suite 407',
        addressLocality: 'South Miami',
        addressRegion: 'FL',
        postalCode: '',
        addressCountry: 'US',
      },
      telephone: '305-586-2953',
      email: 'friendsofrgfoundations@gmail.com',
      sameAs: ['https://www.instagram.com/rgfoundationslearning'],
      foundingDate: '2026',
      taxID: '41-2464922',
      areaServed: 'South Miami, Florida',
      knowsAbout: [
        'Autism support',
        'Educational resources',
        'Financial aid for tuition',
        'Classroom resources',
        'Playground equipment',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '305-586-2953',
        email: 'friendsofrgfoundations@gmail.com',
      },
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  }

  boardMembers: BoardMember[] = [
    {
      id: 'member-1',
      firstName: 'Natalie',
      lastName: 'Urbieta',
      title: 'President',
      role: 'President',
    },
    {
      id: 'member-2',
      firstName: 'Anibal',
      lastName: 'Gutierrez',
      title: 'Secretary',
      role: 'Secretary',
    },
    {
      id: 'member-3',
      firstName: 'Max',
      lastName: 'Nankin',
      title: 'Treasurer',
      role: 'Treasurer',
    },
  ]

  missionStatement =
    'Friends of RG is dedicated to empowering children on the autism spectrum by providing financial aid, educational resources, and comprehensive support for tuition and school-related costs. We believe that every child deserves access to quality education and the tools necessary to succeed academically, socially, and emotionally. Our mission is to remove financial barriers so that no child is denied the opportunity to learn, grow, and thrive in an environment designed to support their unique needs.'

  visionStatement =
    "We envision a world where every child on the autism spectrum has equitable access to quality education and support services, regardless of their family's financial circumstances. We aspire to build a community of passionate advocates and generous donors who understand the transformative power of investment in children's futures. Together, we will create a legacy of inclusion, empowerment, and hope for generations of children to come."

  coreValues: OrganizationValue[] = [
    {
      title: 'Equity',
      description:
        'We believe every child deserves access to quality education and support services without financial barriers standing in the way of their success.',
      icon: 'fas fa-balance-scale',
    },
    {
      title: 'Inclusion',
      description:
        'We are committed to creating and supporting inclusive educational environments where all children, especially those on the autism spectrum, are valued, understood, and empowered to reach their full potential.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Impact',
      description:
        'We measure success by the positive, lasting changes we create in the lives of the children and families we serve, and we remain accountable to our mission with transparency and integrity.',
      icon: 'fas fa-star',
    },
  ]
}
