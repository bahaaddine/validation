import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import TeamContent from "../containers/teams/TeamContent";

const Team = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro  | Team</title>
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="OUR TEAM" />
        {/* team content */}
        <TeamContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default Team;
