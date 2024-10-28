import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoomType({ selectedRoomType }) {
  return (
    <div>
      <label className="text-slate-400">Choisissez le type de pièce *</label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Type de pièce" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="living-room">Salon</SelectItem>
          <SelectItem value="bedroom">Chambre</SelectItem>
          <SelectItem value="kitchen">Cuisine</SelectItem>
          <SelectItem value="office">Bureau</SelectItem>
          <SelectItem value="bathroom">Salle de bain</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType;
