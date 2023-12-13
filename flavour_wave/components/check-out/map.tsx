"use client";
import React, { useState } from "react";
import { Map as Mapp, Marker, Overlay } from "pigeon-maps";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import useAddressUserStore from "@/hook/use-address-user";

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
  const { onAddedLocation, address, onRest } = useAddressUserStore();

  const handleMarkerSelect = ({ latLng }: { latLng: [number, number] }) => {
    setLocation(latLng);
    !isPicked && setIsPicked(true);
  };

  const handleLocationPick = () => {
    const [latitude, longitude] = location; // Assuming location is an array of [number, number]
    const userLocation = `${latitude}, ${longitude}`; // Combining latitude and longitude into a string
    onAddedLocation({
      userLocation,
      distance: String(
        getDistanceFromLatLngInKm(defaultLat, defaultLng, latitude, longitude)
      ),
    });
  };

  return (
    <div className="container my-4">
      <Mapp
        height={400}
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
      <div>
        <Button
          disabled={isPicked || address.distance !== "" ? false : true}
          onClick={handleLocationPick}
        >
          Pick
        </Button>

        <Button disabled={isPicked ? false : true} onClick={onRest}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Map;
