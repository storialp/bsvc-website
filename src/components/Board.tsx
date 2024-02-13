const boardMembers = [
  {
    name: 'Luis Pericchi',
    role: 'President',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E03AQFuREPd2gnoKQ/profile-displayphoto-shrink_800_800/0/1697293887271?e=1713398400&v=beta&t=XW6isInQl9v66iNsQiqvLZ_4RWwUM-U0q5nK7zCbljo',
    bio: 'Luis is a BEMACS student who started in BSVC as a member of communications, he then went on to be Vice President and now President. He has work experience in VC and Software Engineering.',
  },
  {
    name: 'Eileen Manning',
    role: 'Vice President',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGlcVazgkimBA/profile-displayphoto-shrink_800_800/0/1698064141871?e=1713398400&v=beta&t=K4w-6BqdiBJXA0pXPaSHv2Ai93PA0B7WTkIbJniRbaY',
    bio: 'Eileen is a BEMACS student who started in BSVC as a member of consulting, she then became Vice President. Eileen has previous work experience in FinTech, Healthcare manufacturing, and is now an Investment Manager at PSV',
  },{
    name: 'Mario Chioatto',
    role: 'Head of Events',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQH1xJpMGkAVAQ/profile-displayphoto-shrink_800_800/0/1697467596143?e=1713398400&v=beta&t=vS3U3T1owLOAZn7N67rbXnDoOl5_8pbqd5lVA9vGhNQ',
    bio: 'Mario is a CLEAM student who started in BSVC as a team leader in events, he is now the Head of Events. Mario started his VC career working as a junior analyst at Proximity Capital',
  },{
    name: 'Liza Shaban',
    role: 'Head of Communications',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQGF2aDiTmadvA/profile-displayphoto-shrink_800_800/0/1602075974058?e=1713398400&v=beta&t=228vi1whQ0SbLIGPFZtVkE9Xje-etn-TnUn1_65tlu8',
    bio: "Liza is an International Management master's student, she joined BSVC directly as head of communications. Liza has previous work experience as a product manager at Klarna and Stocard.",
  },{
    name: 'Paul Elias',
    role: 'Head of Articles',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQG7GgeIgeZ8bQ/profile-displayphoto-shrink_800_800/0/1652302597832?e=1713398400&v=beta&t=7adxzXnrqP8M4gh2b1zruguyFOgPo4Tqy6bQ87EvmQE',
    bio: 'Paul joined BSVC as a part of the consulting division, he then became head of articles. Paul has previous work experience working on innovative projects at Axel Springer and Tullet Prebon.',
  },{
    name: "Matteo D'Ambrogio",
    role: 'Head of HR',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQF209uExPhDsQ/profile-displayphoto-shrink_800_800/0/1697289551032?e=1713398400&v=beta&t=SHJAgdz3eyKjyqLiLNhCMTh7nHBMn0BKx2ysCkAtsZs',
    bio: 'Matteo joined BSVC as part of the HR division and is now the head of it.',
  },
]

export default function Board() {
  return (
    <section id="board" aria-label="Our board members">
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the board</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re the people behind BSVC who will guide you through all the tasks you need to do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {boardMembers.map((member) => (
            <li key={member.name} className="flex flex-col gap-6 xl:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={member.imageUrl} alt="" />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                <p className="text-base leading-7 text-gray-600">{member.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{member.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  )
}
