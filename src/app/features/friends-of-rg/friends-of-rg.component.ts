import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { environment } from '../../../environments/environment'

export interface BoardMember {
  id: string
  firstName: string
  lastName: string
  title: string
  role: string
  bio: string
  imagePath: string
  email?: string
  linkedinUrl?: string
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
  imports: [CommonModule],
})
export class FriendsOfRgComponent {
  donationUrl = environment.donation?.externalPlatformUrl || '#'

  boardMembers: BoardMember[] = [
    {
      id: 'member-1',
      firstName: 'Sarah',
      lastName: 'Anderson',
      title: 'Board Chair & Founder',
      role: 'Chair',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imagePath: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      linkedinUrl: 'https://linkedin.com/in/sarahanderson',
    },
    {
      id: 'member-2',
      firstName: 'Michael',
      lastName: 'Thompson',
      title: 'Vice Chair',
      role: 'Vice Chair',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imagePath: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      linkedinUrl: 'https://linkedin.com/in/michaelthompson',
    },
    {
      id: 'member-3',
      firstName: 'Jennifer',
      lastName: 'Martinez',
      title: 'Secretary',
      role: 'Secretary',
      bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imagePath: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      linkedinUrl: 'https://linkedin.com/in/jennifermartinez',
    },
    {
      id: 'member-4',
      firstName: 'David',
      lastName: 'Chen',
      title: 'Treasurer',
      role: 'Treasurer',
      bio: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      imagePath: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      linkedinUrl: 'https://linkedin.com/in/davidchen',
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
