import { Button, Spinner } from "flowbite-react";
import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-row w-full h-full justify-center border-4 border-smooth-blue items-center">
      <div className="flex flex-row gap-3">
        <Button outline="true" color="smooth-blue">
          <Spinner aria-label="Spinner button" />
          <span className="pl-3 text-lg">
            Reciting some inchantations from the magical book of devs...
          </span>
        </Button>
      </div>
    </div>
  );
}
