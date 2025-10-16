"use client";

import React from "react";
import HeroSection from "./_components/HeroSection";
import CapabilitiesSection from "./_components/CapabilitiesSection";
import TeamCollaborationSection from "./_components/TeamCollaborationSection";
import MultiChannelSupportSection from "./_components/MultiChannelSupportSection";
import QualityControlSection from "./_components/QualityControlSection";

const AIAgentPage: React.FC = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <HeroSection />
      <CapabilitiesSection />
      <TeamCollaborationSection />
      <MultiChannelSupportSection />
      <QualityControlSection />
    </div>
  );
};

export default AIAgentPage;
