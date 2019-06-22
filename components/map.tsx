import * as React from 'react'
import { Map, MapMarker } from 'reaviz'

import 'reaviz/dist/index.css'


export const MapComponent = () => {
  // window.innerHeight
  return(
    <div className="container">
      <div className="d-flex justify-content-center">
        <Map
          width={950}
          height={`${950 / 1.65}`}
          markers={[
            <MapMarker
              coordinates={[-122.419418, 37.774929]}
              tooltip="San Franscico, USA"
            />,
            <MapMarker coordinates={[-0.127758, 51.507351]} tooltip="London, UK" />,
            <MapMarker coordinates={[14.4378, 50.075539]} tooltip="Prague, CZE" />,
            <MapMarker
              coordinates={[121.473701, 31.230391]}
              tooltip="Shanghai, China"
            />
          ]}
        />
      </div>
    </div>
  )
}
