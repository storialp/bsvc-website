const people = [
  {
    name: 'Giovanni Calabrese',
    role: 'VC @ Sella',
    BSVCRole: 'Co-founder & Former President',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQHtaox40PuvnQ/profile-displayphoto-shrink_800_800/0/1625087761349?e=1712793600&v=beta&t=Bftrh4IIF714ujKW3QC663L65BrZ6ErajQrI1ikWc5o',
    bio: 'Giovanni started his VC career in Berlin at Redstone and has now returned to Italy to be a VC at Sella',
    linkedinUrl: 'https://www.linkedin.com/in/gio-calabrese/',
  },
  {
    name: 'Bianca Ambrosini',
    role: 'Investor @ Best Nights VC',
    BSVCRole: 'Co-founder & Former Head of Communications',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E03AQGbG7xHBZEL7A/profile-displayphoto-shrink_800_800/0/1696860114566?e=1712793600&v=beta&t=S5-ox9JZpqArpWCCtgEJl-Usqaf6d8vGayrPhQxs5M0',
    bio: "Bianca started her career in VC doing Investor Relations at Partech. She went on to work at B4i and is now in Berlin working at Best Nights, Jägermeister's VC",
    linkedinUrl: 'https://www.linkedin.com/in/bianca-ambrosini/',
  },
  {
    name: 'Daria Pelini',
    role: 'Ventures Associate @ Plug and Play',
    BSVCRole: 'Co-founder & Former Head of Partnerships',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQFyoZbwhPY8Ng/profile-displayphoto-shrink_800_800/0/1632387117898?e=1712793600&v=beta&t=pOt_mcCYW9kMPutc6lqMrfONi6LgQx8us5a77xZHb9Q',
    bio: "Daria started her career as an Operations Intern at Angels4Impact, she then went on to work at Impact Hub Milano before settling into Plug and Play in Valencia",
    linkedinUrl: 'https://www.linkedin.com/in/daria-pelini-81930017a/',
  },
  {
    name: 'Matteo Ferravante',
    role: 'Founder in Residence @ Vento',
    BSVCRole: 'Co-founder & Former Vice President',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQFBkuALpQaOVA/profile-displayphoto-shrink_800_800/0/1705752198273?e=1712793600&v=beta&t=o9rlPP4MsLSVsD4outQxJQUJALJBNuOGc4dbNl0WSkI',
    bio: "Matteo started his startup career at Joinrs but he didn't stop there. He has worked at PayPal, Macai, and HelloFresh. With a background in Product Management he is now a founder at Vento's Venture Builder",
    linkedinUrl: 'https://www.linkedin.com/in/matteo-luigi-ferravante/',
  },
  {
    name: 'Nazli Okuducu',
    role: 'Innovation Analyst @ Deloitte',
    BSVCRole: 'Former Head of Communications',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEuCS4FKCzUFw/profile-displayphoto-shrink_800_800/0/1679389747348?e=1714608000&v=beta&t=PLwGQcMR1RMBxDwvcc2kJQO-S5JTaVFUULZ7mdaLkdk',
    bio: "Nazli started her VC career at Workup, one of Turkey's most active accelerators. She then worked at StartersHub, APX, and Deloitte Garage in Berlin. She now works at Deloitte Officine Innovazione as an analyst",
    linkedinUrl: 'https://www.linkedin.com/in/nazliokuducu/',
  },
  {
    name: 'Luca Schettino',
    role: 'Investor Relations @ PoliHub',
    BSVCRole: 'Co-founder & Former member',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQHJr3bhQdofgA/profile-displayphoto-shrink_800_800/0/1662997690724?e=1712793600&v=beta&t=PsfrfgUdL1vI5jHaMtjjRsHvrjGF6877EcOJJJZeKmo',
    bio: "Luca started his venture career at Plug and Play. Afterwards, he did Venture Building at PoliHub and now does Investor Relations at PoliHub",
    linkedinUrl: 'https://www.linkedin.com/in/luca-schettino/',
  },
]

export default function AlumniList() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Alumni Network</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about VC and startups. Here are some of our best talents.
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="text-base leading-7 text-gray-600">{person.BSVCRole}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
