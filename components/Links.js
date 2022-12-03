const links = [
  {
    name: 'Official Website',
    href: 'https://dabaz.me'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/dabaz_official'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/dabaz_official'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@dabaz_official'
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ?si=gfzoRvEUTTSt8Nj9a-wveg'
  },
  {
    name: 'PayPal',
    href: 'https://paypal.me/dabazofficial'
  },
  {
    name: 'DabVibes',
    href: 'https://vibes.dabaz.me'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dabaz-official'
  },
]

export default function Links() {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className=""
            target="_blank"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}