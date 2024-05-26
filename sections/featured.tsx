import { ExpandableFeature } from "@/components/expandables-cards/expandable-featured";
import { FeaturedCard } from "@/components/cards/featured-card";
import { Heading } from "@/components/heading/heading";
import { featuredData } from "@/data";

const MainFeatured = featuredData[0];
export const FeaturedSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8" id="featured">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/* Main Featured Card */}
      <FeaturedCard
        active={true}
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      />
      <div className="mt-24"></div>
      <ExpandableFeature />
    </div>
  );
};
