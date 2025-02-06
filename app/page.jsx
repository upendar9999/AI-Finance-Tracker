import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData } from "@/data/landing";

export default function Home() {
  return (
    <div className="mt-28">
      <HeroSection />
      <section className="py-10 bg-blue-50 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {data.value}
                </div>
                <div className="text-gray-600">{data.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-10">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feat, index) => (
              <Card key={index} className="p-4">
                <CardContent className="space-y-4 pt-4 ">
                  {feat.icon}
                  <h3 className="text-xl font-semibold">{feat.title}</h3>
                  <p className="text-gray-600">{feat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-10">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full
                flex items-center justify-center mx-auto mb-6
                "
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
