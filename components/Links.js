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
    <ul className="list-none mx-auto my-8 grid grid-cols-1 gap-y-4 text-center max-w-xs">
      {links.map((link) => (
        <a
          href={link.href}
          className="bg-white/30 backdrop-blur-[10px] p-[0.9em] border border-gray-50 rounded-2xl shadow-md hover:bg-white transition duration-200"
          target="_blank"
        >
          <li
            key={link.name}
            className="text-lg"
          >
            {link.name}
          </li>
        </a>
      ))}
    </ul>
  )
}