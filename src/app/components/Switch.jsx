"use client"
import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default function Togglebutton({enabled,onChange}) {

    return (
        <Switch
            checked={enabled}
            onChange={onChange}
            className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-300 
                ${enabled ? 'bg-green-600' : 'bg-green-900'}`}
       
    >
            <span
                aria-hidden="true"
                className="data-active:border-purple-500 pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7 "
            />
        </Switch>
    )
}
