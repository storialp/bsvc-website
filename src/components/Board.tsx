const boardMembers = [
  {
    name: "Eileen Manning",
    role: "President",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGlcVazgkimBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698064141871?e=1731542400&v=beta&t=c6Y4Baj10tAnu2hYGwo4u5_5eaYy2fQ3880JX4SWe-E",
    bio: "Eileen is a BEMACS student who started in BSVC as a member of consulting, she then became Vice President. Eileen has previous work experience in Cloud computing, FinTech, Healthcare manufacturing, and is now an Investment Manager at PSV",
  },
  {
    name: "Daniel Shai",
    role: "Vice President",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQHYuF1jIJ6UgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666134439178?e=1731542400&v=beta&t=c_DToQU77bn1-y7fICcnH3SVAVNoYd7saMDSsvUhJe4",
    bio: "Daniel (Danny) is a BIEM student who joined BSVC in the consulting division and is now Vice President. Danny has experience as a founding member of a technology startup, and has previously worked in commercial banking. ",
  },
  {
    name: "Kartal Tepebasi",
    role: "Head of Events",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGiX6C0C7g-DA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719861676774?e=1731542400&v=beta&t=sK8o9SvBd7Lq9FceQD9g23lEtwWoUSTvfJHmt4_XJ1o",
    bio: "Kartal is a BIEF student who started in BSVC as a member of the events division and now serves as the Head of Events. Kartal has previous international experience working at P&G, AK Investment Bank and Farmasi both in Turkey and Mexico. ",
  },
  {
    name: "Claudia Casin",
    role: "Head of Communications",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQFKKExpLHS_DQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1650207247811?e=1731542400&v=beta&t=d3H7FWBfbWdjFdLvEOkXobSBP8COj9GYXoSuNrtS93Q",
    bio: "Claudia started in BSVC as part of the articles division and now serves as Head of Communications. She brings international experience from internships at Siemens Energy and Jumeirah Hotels, where she contributed to strategic initiatives and developed insights into global business operations.",
  },
  {
    name: "Aristote Pellissier",
    role: "Co-head of Consulting",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQHVHbyBdKjhLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697372161884?e=1731542400&v=beta&t=4ahFfNVO_U99lJT4KpDDUjlhSiQ07a399GZTnreTiiw",
    bio: "Aristote is a BEMACS student who started in BSVC as a member of the consulting division and is now head of Consulting. He has work experience in Private Equity and Software Engineering.",
  },
  {
    name: "Jorge Franco",
    role: "Co-head of Consulting",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQEJAExBgWlEgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1663418031386?e=1731542400&v=beta&t=UgOEIuue0E6yhIX3ZXbKYBEpDBJE7ezQwv6gLlzYLMM",
    bio: "Jorge is a BIEF student who started in BSVC as a member of the events division, he is now the co-head of consulting. Jorge has previous experience in the energy sector and startup acceleration at Repsol and Forest Valley",
  },
  {
    name: "Kim Marie Louis de Bagneux",
    role: "Head of Articles",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQF209uExPhDsQ/profile-displayphoto-shrink_800_800/0/1697289551032?e=1713398400&v=beta&t=SHJAgdz3eyKjyqLiLNhCMTh7nHBMn0BKx2ysCkAtsZs",
    bio: "Kim is a BIEM student who joined BSVC in the articles division and is now Head of Articles. Kim has previous experience in a film production startup, as well as in private equity and private credit.",
  },
];

export default function Board() {
  return (
    <section id="board" aria-label="Our board members">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the board
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re the people behind BSVC who will guide you through all the
              tasks you need to do.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {boardMembers.map((member) => (
              <li key={member.name} className="flex flex-col gap-6 xl:flex-row">
                <img
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                  src={member.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {member.role}
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
