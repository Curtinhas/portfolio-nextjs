import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { FormEvent, useRef, useState } from "react";
import { MdEmail, MdSubject } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactCard } from "@/components/cards/contact";
import { Heading } from "@/components/heading/heading";
import { Input } from "@/components/ui/input";
import { SelectInput } from "@/components/ui/select-input";
import { SiMinutemailer } from "react-icons/si";
import { TextArea } from "@/components/ui/text-area";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [services, setServices] = useState<string[]>([]);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <div className="pt-24 px-3 lg:px-8" id="contact">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Contact Card */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="(+351) 928154300"
              btnText="Call me"
            />
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="carlos.curtinhas@gmail.com"
              btnText="Email me"
            />
          </div>
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 overflow-hidden px-[25px] py-5 shadow-lg"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>
            {/* Multiple select container */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Services */}
                  {servicesOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      type="checkbox"
                      id={service.id}
                      text={service.text}
                      selectOptions={services}
                      setSelectOptions={setServices}
                      allowMultiples
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Textarea message */}
            <TextArea
              name="message"
              placeholder="Tell me about your project."
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <Button className="!w-44 !py-3 !text-xl">
                Send <SiMinutemailer />
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

const servicesOptions = [
  {
    id: "Web Development",
    text: "Web Development",
  },
  {
    id: "Software Development",
    text: "Software Development",
  },
  {
    id: "Fullstack Development",
    text: "Fullstack Development",
  },

  {
    id: "SEO",
    text: "SEO",
  },
];
