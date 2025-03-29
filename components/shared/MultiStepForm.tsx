"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Hammer, HouseIcon } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Which best describes you?",
    content:
      "We’ll get you to the right features or team to help you get set up.",
  },
  {
    id: 2,
    title: "What are you working on?",
    content: "We’ll recommend tools based on your needs.",
  },
  {
    id: 3,
    title: "How will you execute your projects?",
    content: "If you’re looking for help, we’ll help you find professionals.",
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [button, setButton] = useState<string | null>(null);
  const [active2Button, setActive2Button] = useState<string | null>(null);

  const handleClickStep1 = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const handleClickStep2 = (buttonId: string) => {
    setButton(buttonId);
  };
  const handleClickStep3 = (buttonId: string) => {
    setActive2Button(buttonId);
  };

  const nextStep = () => {
    if (currentStep === 0 && activeButton === null) {
      toast.error("Please select an option to proceed.");
    } else if (currentStep === 1 && button === null) {
      toast.error("Please select an option to proceed.");
    } else if (currentStep === 2 && active2Button === null) {
      toast.error("Please select an option to proceed.");
    } else if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="max-w-lg p-6 bg-white">
        <h2 className="text-xl font-bold mb-2">{steps[currentStep].title}</h2>
        <p className="mb-4 text-sm">{steps[currentStep].content}</p>
        <Progress
          value={((currentStep + 1) / steps.length) * 100}
          className="h-2 mb-4"
        />

        {/* Step Content */}

        {/* Step 1 */}
        {currentStep === 0 && (
          <div>
            <div className="w-full space-y-2">
              <div
                onClick={() => handleClickStep1("button1")}
                className={`w-full border ${
                  activeButton === "button1"
                    ? "border-2 border-black"
                    : "border"
                } rounded-xl p-3`}
              >
                <div className="flex gap-3">
                  <Button size={"icon"} className="bg-blue-500 text-white">
                    <HouseIcon />
                  </Button>
                  <h3 className="mt-1 font-medium">Property Owner</h3>
                </div>
              </div>
              <div
                onClick={() => handleClickStep1("button2")}
                className={`w-full border ${
                  activeButton === "button2"
                    ? "border-2 border-black"
                    : "border"
                } rounded-xl p-3`}
              >
                <div className="flex gap-3">
                  <Button size={"icon"} className="bg-orange-500 text-white">
                    <Hammer />
                  </Button>
                  <h3 className="mt-1 font-medium">Contractor</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 1 && activeButton === "button1" && (
          <div>
            <Button
              onClick={() => handleClickStep2("button1")}
              className={`bg-white border ${
                button === "button1" && "border-2 border-black bg-[#FAF3E0]"
              } rounded-2xl w-full text-black hover:bg-[#FAF3E0]`}
            >
              <h1 className="text-center font-medium">My Own Home</h1>
            </Button>
            <Button
              onClick={() => handleClickStep2("button2")}
              className={`bg-white border ${
                button === "button2" && "border-2 border-black bg-[#FAF3E0]"
              } rounded-2xl mt-2 w-full text-black hover:bg-[#FAF3E0]`}
            >
              <h1 className="text-center font-medium">Residental Property</h1>
            </Button>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 2 && activeButton === "button1" && (
          <div>
            <div className="w-full space-y-2">
              <button
                onClick={() => handleClickStep3("button1")}
                className={`w-full border ${
                  active2Button === "button1"
                    ? "border-2 border-black"
                    : "border"
                } rounded-xl p-3`}
              >
                <div className="flex gap-3">
                  <Button size={"icon"} className="bg-blue-500 text-white">
                    <HouseIcon />
                  </Button>
                  <h3 className="mt-1 font-medium">Hire a Professional</h3>
                </div>
              </button>
              <button
                onClick={() => handleClickStep3("button2")}
                className={`w-full border ${
                  active2Button === "button2"
                    ? "border-2 border-black"
                    : "border"
                } rounded-xl p-3`}
              >
                <div className="flex gap-3">
                  <Button size={"icon"} className="bg-orange-500 text-white">
                    <Hammer />
                  </Button>
                  <h3 className="mt-1 font-medium">Do It All Myself</h3>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between border-t shadow-top-xl p-4 bg-white">
        {currentStep === 0 ? (
          <div></div>
        ) : (
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
          >
            Previous
          </Button>
        )}
        {currentStep === steps.length - 1 ? (
          <Link href="/">
            <Button className="bg-blue-500">Finish</Button>
          </Link>
        ) : (
          <Button className="bg-blue-500" onClick={nextStep}>
            Next
          </Button>
        )}

        {/* Progress Bar */}
      </div>
    </div>
  );
}
