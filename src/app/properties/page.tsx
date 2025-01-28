import React from 'react'
import Card from '@/components/Card'
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';

const EVENTS_QUERY = defineQuery(`*[_type == "property"] | order(dateAdded desc)
`);


export async function PropertiesPage() {
  const { data: properties } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <div className='flex flex-col justify-center items-center space-y-8 my-10'>
        <h1 className='font-poppins text-3xl font-bold'>Properties</h1>
        <div className='flex flex-wrap space-y-3 justify-center'>
            {properties.map((property) => (
                <Card property={property} index={1}/>
            ))}
        </div>
    </div>
  )
}

export default PropertiesPage