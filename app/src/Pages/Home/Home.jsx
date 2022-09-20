// ========---======== < React > ========---======== //
import React from "react";

// ========---======== < External-Components > ========---======== //
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import SearchExercises from "../../Components/SearchExercises/SearchExercises";

// ========---======== < Component > ========---======== //
function Home() {
  return (
    <>
      <HeroBanner />
      <SearchExercises />
    </>
  );
}

export default Home;
