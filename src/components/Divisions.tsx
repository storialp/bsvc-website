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
      "Organize events with Venture Capital funds and startups. This is the main division of the association",
    icon: BriefcaseIcon,
  },
  {
    name: "Communications",
    description:
      "Promote our events and grow our brand in the VC ecosystem through our different social media channels",
    icon: CameraIcon,
  },
  {
    name: "Consulting",
    description:
      "Advise early-stage startups on their fundraising. Connect them with VCs in our network if it's a match",
    icon: ChartPieIcon,
  },
  {
    name: "Articles",
    description:
      "Write on the state of VC, current trends and interesting developments. We post these here!",
    icon: PencilIcon,
  },
];

export default function Divisions() {
  return (
    <section id="divisions" aria-label="Our teams">
      <div className="relative bg-white py-16 ">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Divisions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our teams
          </p>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 mx-24">
              {divisions.map((division) => (
                <div key={division.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-yellow-400 p-3 shadow-lg">
                          <division.icon
                            className="h-10 w-10 text-white"
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
