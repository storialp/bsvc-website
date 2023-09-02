import {
  BriefcaseIcon,
  CameraIcon,
  ChartPieIcon,
  PencilIcon,
} from "@heroicons/react/24/outline/index.js";

const divisions = [
  {
    name: "Events",
    description:
      "The Events division organizes the coolest public events, with venture capitalists, start-ups, and other important players in the ecosystem, and also internal events dedicated to our members only, such as in-company visits.",
    icon: BriefcaseIcon,
  },
  {
    name: "Communications",
    description:
      "The Social division helps promote our activities on platforms like Instagram and LinkedIn. They create and post engaging content such as news, stories, and other interesting material to keep our followers up-to-date with the latest developments in VC, tech, and related fields.",
    icon: CameraIcon,
  },
  {
    name: "Consulting",
    description:
      "The newly launched Consulting division revolves around helping startups grow and raise funds. The division is committed to supporting founders in building and growing sustainable businesses.",
    icon: ChartPieIcon,
  },
  {
    name: "Articles",
    description:
      "The Articles division is dedicated to producing high-quality posts about VC-related topics. They cover everything from theoretical concepts to in-depth analyses of interesting content, providing valuable insights and information to our audience.",
    icon: PencilIcon,
  },
];

export default function Divisions() {
  return (
    <section id="divisions" aria-label="Our teams">
      <div className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-[#FFDE00]">Divisions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our teams
          </p>
          {/* <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
            
          </p> */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
              {divisions.map((division) => (
                <div key={division.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-yellow-400 p-3 shadow-lg">
                          <division.icon
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {division.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">
                        {division.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
