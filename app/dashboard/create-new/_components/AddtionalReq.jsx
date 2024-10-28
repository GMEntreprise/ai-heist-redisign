import React from "react";
import { Textarea } from "@/components/ui/textarea";

function AddtionalReq() {
  return (
    <div className="mt-5">
      <label className="text-gray-400">
        Saisissez les exigences supplémentaires (optionnel)
      </label>
      <Textarea
        className="mt-2"
        onChange={(e) => additionalRequirementInput(e.target.value)}
      />
    </div>
  );
}

export default AddtionalReq;
