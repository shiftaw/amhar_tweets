// AIzaSyCN7BWajn5MmhUpy0_bQiOUzp0vDDgc-3c    /* google map API

import React from 'react'
import {
  useLoadScript,
  GoogleMap,
  Marker,
  Circle,
} from '@react-google-maps/api'
import './styles.scss'
const markerIcon = require('./marker.svg')

export default function Placess() {
  const [isMounted, setIsMounted] = React.useState(false)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCN7BWajn5MmhUpy0_bQiOUzp0vDDgc-3c',
  })
  React.useEffect(() => setIsMounted(isLoaded), [isLoaded])

  const styles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8ec3b9',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1a3646',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#4b6878',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#64779e',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#4b6878',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#334e87',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#023e58',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#283d6a',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6f9ba5',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#023e58',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3C7680',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#304a7d',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#98a5be',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2c6675',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#255763',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#b0d5ce',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#023e58',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#98a5be',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#283d6a',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3a4762',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#0e1626',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#4e6d70',
        },
      ],
    },
  ]
  if (!isLoaded) return <div>Loading map</div>
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          color: '#F5100E',
          zIndex: 20,
          fontSize: 40,
          fontWeight: 600,
          background: '#07090A89',
          padding: '16px 32px',
          borderRadius: 8,
        }}
      >
        <div style={{ fontSize: 18 }}>Total massacred</div>
        +1800
        <a class='mailto' href='mailto:contact@test.com'>
          Mail
        </a>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div className='left-sidbar-list'></div>

        <GoogleMap
          zoom={3}
          mapContainerStyle={{ height: '100vh', width: '100%' }}
          center={{ lat: 9.06731, lng: 36.105876 }}
          options={{
            styles,

            disableDefaultUI: true,
          }}
          defaultOptions={{
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          defaultZoom={6}
        >
          {isMounted && (
            <>
              <Marker
                label={{ text: 'Tolle 590  killed', color: '#fff' }}
                name={'SOMA'}
                position={{ lat: 9.06731, lng: 36.105876 }}
                //  icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
              />
              <Circle
                center={{ lat: 9.06731, lng: 36.105876 }}
                radius={2000}
                options={{
                  zIndex: 3,
                  fillOpacity: 0.05,
                  strokeColor: '#8BC34A',
                  fillColor: '#8BC34A',
                }}
              />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  )
}
