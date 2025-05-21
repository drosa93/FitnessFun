"use client"
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { ArrowRight, Dumbbell, Clock, Mic, BicepsFlexed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "./provider";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Home() {
  const { user } = useUser();


  return (
    <div>
      <header className="border-b w-full">
        <div className=" px-10 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={'/logo.png'} alt="logo" width={140} height={200} />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
          </nav>
          <div>

            <Link href={'/dashboard'}>
              <Button>Dashboard</Button>
            </Link>
            {/* } */}
          </div>
        </div>
      </header>

      <main className="flex-1 items-center justify-center">
        {/* Hero Section */}
        <section className="py-20 flex items-center justify-center w-full md:py-28 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Get a Personalized Workout Plan Based on <span className="text-primary"> YOU </span>.
                  </h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Built around your goals, schedule, equipment, and fitness history.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-blue-700">
                    Get My Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                  <div className="relative">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Focused In The Gym</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Fitness Fun helps you stay focused in the Gym, No Longer worry bout what exercise to do next! Have a mapped out plan ready designated to your specific goals and plans as soon as you step foot into the gym.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Save Time</h3>
                <p className="text-center text-gray-500">
                  Automate Your plan, lock in a routine, Just Lift.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Dumbbell className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Data-Driven Insights</h3>
                <p className="text-center text-gray-500">
                  Get detailed plans with adjusted routines designated to your goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <BicepsFlexed className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Find Your Plan</h3>
                <p className="text-center text-gray-500">
                  Get a plan oriented to your specific equipment uses & needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="flex items-center justify-center py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How Fitness Fun works</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Three simple steps to transform your workout routines
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Tell us about yourself</h3>
                <p className="text-center text-gray-500">
                Answer a few quick questions. your goals, experience, equipment, and any limitations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Get Your Custom Plan</h3>
                <p className="text-center text-gray-500">
                 We generate a workout routine tailored to your body, lifestyle, and preferences instantly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold"> Train Smarter</h3>
                <p className="text-center text-gray-500">
                 Follow your plan with confidence. No guesswork, just consistent progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 flex items-center justify-center md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Lets Transform Your Fitness
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Join hundreds of companies already using AiCruiter to find the best talent.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-primary hover:bg-blue-700">
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t flex items-center justify-center bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <BicepsFlexed className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LIFTED</span>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#" className="text-sm hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact
            </Link>
          </nav>
          <div className="text-sm text-gray-500">© 2025 LIFTED. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
