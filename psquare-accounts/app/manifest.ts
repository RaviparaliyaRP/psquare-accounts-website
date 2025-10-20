import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Psquare Accounts - Business Licensing & Registration Services',
    short_name: 'Psquare Accounts',
    description: 'Your trusted partner for business licensing and registration services. From registration to approval — we handle it all.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E2952',
    theme_color: '#FF8C00',
    icons: [
      {
        src: '/psqaure-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/psqaure-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
