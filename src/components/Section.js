import React from 'react'

export default function Section({ children }) {
    return (
        <section className="mt-4 mb-20  sm:flex-col text-gray-600 ">
            {children}
        </section>
    )
}
