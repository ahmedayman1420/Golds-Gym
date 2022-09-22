// ========---======== < React > ========---======== //
import React from "react";

// ========---======== < External-Components > ========---======== //
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import HorizontalScrollExercises from "../../Components/HorizontalScroll/HorizontalScroll";
import SearchExercises from "../../Components/SearchExercises/SearchExercises";
// ========---======== < Component > ========---======== //
function Home() {
  return (
    <>
      <HeroBanner />
      <SearchExercises />
      <HorizontalScrollExercises />
    </>
  );
}

export default Home;
