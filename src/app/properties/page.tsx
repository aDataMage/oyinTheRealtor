"use client"
import React from 'react'
import { useProperties } from '@/contextProvider/PropertyContext'
import Card from '@/components/Card'
// import { ReadMore } from '@/lib/utils'


type Props = {}

function PropertiesPage({}: Props) {
    const { getAllProperties } = useProperties()
    const properties = getAllProperties()
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