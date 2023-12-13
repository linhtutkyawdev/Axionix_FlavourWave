"use client";
import React, { useState } from "react";
import { Map as Mapp, Marker, Overlay } from "pigeon-maps";
import { UserButton } from "@clerk/nextjs";

// flavourwave's location
const defaultLat = 16.82,
  defaultLng = 96.16;

const deg2rad = (deg: number) => deg * (Math.PI / 180);

const getDistanceFromLatLngInKm = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLng = deg2rad(lng2 - lng1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const Map = () => {
  const [location, setLocation] = useState<[number, number]>([
    defaultLat,
    defaultLng,
  ]);

  const [isPicked, setIsPicked] = useState<boolean>(false);

  const handleMarkerSelect = ({ latLng }: { latLng: [number, number] }) => {
    setLocation(latLng);
    !isPicked && setIsPicked(true);
  };

  const handleLocationPick = () => {
    // hit order api with location value
    alert("flavourwave: " + [defaultLat, defaultLng] + "\n");
    alert("customer: " + location + "\n");
    alert(
      "distance: " +
        getDistanceFromLatLngInKm(
          defaultLat,
          defaultLng,
          location[0],
          location[1]
        ) +
        "km"
    );
  };

  return (
    <div className="container my-4">
      <Mapp
        height={500}
        defaultCenter={[defaultLat, defaultLng]}
        defaultZoom={11}
        onClick={handleMarkerSelect}
      >
        <Marker
          width={40}
          anchor={[defaultLat, defaultLng]}
          color="hsl(0deg 39% 70%)"
        />
        <Overlay anchor={[defaultLat, defaultLng]} offset={[40, 80]}>
          FlavourWave
        </Overlay>

        {/* <Marker width={50} anchor={location} /> */}

        {isPicked && (
          <Overlay
            anchor={location}
            offset={[13, 13]}
            className="pointer-events-none"
          >
            <UserButton />
          </Overlay>
        )}
      </Mapp>
      <button className="bg-gray-200 p-3" onClick={handleLocationPick}>
        Pick
      </button>
    </div>
  );
};

export default Map;
