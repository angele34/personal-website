"use client";

import React from "react";
import { motion } from "framer-motion";

import Navigation from "../../components/navbar";
import Footer from "@/components/footer";
import GrainOverlay from "@/components/grain-overlay";
import CourseCard from "@/components/course-card";
import OrgList from "@/components/org-list";

import { courseHistory, campusOrgs, outsideOrgs } from "@/data/courses";

export default function School() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col 2xl:px-32">
      <GrainOverlay />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex-grow"
      >
        <Navigation />

        <div className="relative whitespace-normal pt-20 pb-8 pl-40 xxs:px-2 xs:px-8 sm:px-4 md:py-16 md:px-8 lg:px-8 xl:mr-52">
          {/* Title */}
          <div className="md:pt-8">
            <h1 className="text-green-light pl-4 break-words font-helvetica font-semibold tracking-widest text-opacity-90 xxs:text-h1-xxs xs:text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg xl:text-h1-xl 2xl:text-h1-2xl mb-8">
              School.
            </h1>
          </div>

          {/* Description */}
          <div className="pl-4 pr-8">
            <p className="text-content font-sans_serif font-normal xxs:text-p-xxs xs:text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg xl:text-p-md 2xl:text-p-xl mb-4 md:mb-6 tracking-wider">
              I&apos;m currently a third-year Computer Science student at De La
              Salle University, majoring in{" "}
              <span className="font-semibold">Software Technology</span> and
              minoring in{" "}
              <span className="font-semibold">Cybersecurity</span>. You can
              read about the relevant courses I&apos;m taking and what things
              I&apos;m currently involved in campus here.
            </p>
          </div>

          {/* Course Cards */}
          <div>
            <div className="pt-8 pb-4 px-4 text-content-dark">
              {courseHistory.map((yearBlock) => (
                <div key={yearBlock.year} className="pb-8">
                  <h1
                    className="text-white pb-8 sm:pl-8 xxs:pl-12 font-normal tracking-widest break-words text-[1.9rem]"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#A3C269",
                    }}
                  >
                    {yearBlock.year}
                  </h1>

                  <div className="pb-8 text-center space-y-2">
                    {yearBlock.groups.map((group, groupIndex) => (
                      <div
                        key={groupIndex}
                        className="grid justify-start gap-2 sm:text-p-xs"
                        style={{
                          gridTemplateColumns:
                            group.length <= 2
                              ? `repeat(${group.length}, 283px)`
                              : `repeat(${group.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {group.map((course) => (
                          <CourseCard
                            key={course.code}
                            {...course}
                            variant={groupIndex % 2 === 0 ? "accent" : "green"}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div className="text-content text-left pt-4 px-8">
            <OrgList
              title="Orgs/Clubs in Campus:"
              orgs={campusOrgs}
            />

            <div className="pt-8">
              <OrgList
                title="Orgs outside campus:"
                orgs={outsideOrgs}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bottom-0 w-full z-10">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}