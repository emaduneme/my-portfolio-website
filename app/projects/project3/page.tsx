import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Accessibility Research Initiative | Emmanuel Maduneme',
  description: 'A research project focused on improving digital accessibility for users with diverse needs',
}

export default function Project3() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Accessibility Research Initiative</h1>
      
      <div className="bg-card rounded-lg p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
          <p className="text-gray-300 mb-4">
            A comprehensive research initiative focused on understanding and improving digital accessibility 
            for users with diverse needs. This project aimed to identify barriers in current digital interfaces 
            and develop evidence-based recommendations for more inclusive design.
          </p>
          
          <div className="bg-background p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-gray-300">April 2023 - Present</p>
          </div>
          
          <div className="bg-background p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">My Role</h3>
            <p className="text-gray-300">Research Coordinator & Accessibility Specialist</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Research Methods</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Participatory research with 35 users with diverse abilities</li>
            <li>Accessibility audits of 20 popular websites and applications</li>
            <li>Assistive technology compatibility testing</li>
            <li>Co-design workshops with users and developers</li>
            <li>Longitudinal studies tracking accessibility improvements</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Finding 1</h3>
              <p className="text-gray-300">
                Even WCAG 2.1 AA compliant websites had significant usability issues for screen reader users, highlighting the gap between technical compliance and actual usability.
              </p>
            </div>
            <div className="bg-background p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Finding 2</h3>
              <p className="text-gray-300">
                Cognitive accessibility was the most overlooked aspect in current design practices, affecting users with a wide range of conditions.
              </p>
            </div>
            <div className="bg-background p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Finding 3</h3>
              <p className="text-gray-300">
                Participatory design approaches led to solutions that benefited all users, not just those with disabilities (confirming the curb-cut effect).
              </p>
            </div>
            <div className="bg-background p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Finding 4</h3>
              <p className="text-gray-300">
                Organizations that integrated accessibility testing early in the development process reduced remediation costs by up to 62%.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Impact & Outcomes</h2>
          <p className="text-gray-300 mb-4">
            This ongoing research has already made significant contributions to accessibility practices:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Developed an "Enhanced Accessibility Framework" that goes beyond WCAG compliance</li>
            <li>Created a toolkit for organizations to conduct meaningful accessibility research</li>
            <li>Established partnerships with three major tech companies to implement findings</li>
            <li>Launched an open-source repository of accessibility patterns tested with diverse users</li>
          </ul>
          <p className="text-gray-300">
            The initiative continues to advocate for a more inclusive digital world where accessibility is seen not as a compliance checkbox but as a fundamental aspect of good design that benefits everyone.
          </p>
        </div>
      </div>
    </div>
  )
} 