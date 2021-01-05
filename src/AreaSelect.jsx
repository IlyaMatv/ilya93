import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function AreaSelect({onChangeFn}) {
  const [coordinats, setCoordinats] = useState(null);

  const map = useMap();

  useEffect(() => {
      onChangeFn(coordinats)
    if (!map.selectArea) return;

    map.selectArea.enable();

    map.on("areaselected", (e) => {
      let coor = e.bounds.toBBoxString().split(",");
      setCoordinats((state) => [
        { a: [+coor[3], +coor[0]] },
        { b: [+coor[3], +coor[2]] },
        { c: [+coor[1], +coor[0]] },
        { d: [+coor[1], +coor[3]] }
      ]);
      L.rectangle(e.bounds, { color: "red", weight: 1 }).addTo(map);
    });

    map.selectArea.setValidate();
  });

  return null;
}

