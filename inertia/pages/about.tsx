// resources/js/Pages/About.jsx
import React from 'react'
import { Link } from '@inertiajs/react'
import profileImage from '../../resources/assets/SCHERER.T.png'

export default function About({ data }) {
  // Tu peux passer `data` depuis le controller Inertia ou utiliser des données statiques
  const parcours = [
    { year: '2020', detail: 'B.Sc. in Computer Science, University X' },
    { year: '2021', detail: 'Web Development Internship at Company Y' },
    { year: '2022', detail: 'Personal Project: Portfolio in React & TailwindCSS' },
  ]

  const skills = ['React', 'TailwindCSS', 'Laravel', 'JavaScript', 'HTML/CSS']

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 pt-32 h-screen">
      {/* Photo + Présentation */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={profileImage}
          alt="Tom Scherer"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Tom Scherer</h1>
          <p className="text-gray-700 mb-2 font-medium">Web Developer / CEO</p>
          <p className="text-gray-700">
            I am a web developer passionate about creating modern and high-performance web
            applications. I help companies and professionals bring their ideas to life with
            tailored, efficient digital solutions.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Parcours / Études / Expériences */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Education & Experience</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {parcours.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.year}:</span> {item.detail}
            </li>
          ))}
        </ul>
      </section>

      {/* Compétences */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
