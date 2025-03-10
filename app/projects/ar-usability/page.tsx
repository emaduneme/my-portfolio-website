import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Usability Testing for Non-profit AR Experience | Emmanuel Maduneme',
  description: 'A comprehensive UX research study on digital learning platforms',
}

export default function Project1() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Usability Testing for Non-profit AR Experience</h1>
      
      {/* Hero Image */}
      <div className="relative w-full aspect-[1152/648] mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/projects/project1/place hero image here.gif" 
          alt="Project hero image showing AR experience" 
          fill
          style={{ objectFit: 'cover' }}
          priority
          unoptimized
        />
      </div>
      
      <div className="bg-card rounded-lg p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
          
          <div className="bg-background p-6 rounded-md space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Timeline & Role</h3>
                <p className="text-gray-300">January 2023 - June 2023</p>
                <p className="text-gray-300">Lead UX Researcher</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Client</h3>
                <p className="text-gray-300">Hope for Haiti Foundation</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Team</h3>
              <p className="text-gray-300">Cross-functional team of Snap AR Scholars (Designers and Researchers)</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Methods</h3>
              <p className="text-gray-300">Think-aloud usability testing, Semi-structured interviews</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-gray-300">Camera (mobile phone), Audio recording device, Canva</p>
            </div>
          </div>
        </div>
        
        {/* Context Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Context</h2>
          <p className="text-gray-300 mb-4">
            Hope for Haiti Foundation is a nonprofit that was looking for a way to showcase its schoolhouse projects in Haiti to its donors. Their goal was to immerse and engage donors through Augmented Reality (AR) technology provided on the Snapchat platform.
          </p>
          <p className="text-gray-300 mb-4">
            The design team came up with two hi-fi 3D virtual replica prototypes of a schoolhouse built by Hope for Haiti Foundation. The first UI is an Embodied Virtual Hand and the second is a Screentouch interface.
          </p>
          
          {/* Interface Prototypes Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Embodied Virtual Hand UI */}
            <div className="relative w-full h-[717px] rounded-lg overflow-hidden">
              <Image 
                src="/images/projects/project1/Embodied Virtual Hand UI.gif" 
                alt="Embodied Virtual Hand UI prototype" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Screentouch Interface */}
            <div className="relative w-full h-[717px] rounded-lg overflow-hidden">
              <Image 
                src="/images/projects/project1/Screentouch Interface.gif" 
                alt="Screentouch Interface prototype" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        
        {/* Business Objectives Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Business Objectives</h2>
          <p className="text-gray-300 mb-4">
            The main objective was to reduce donors' mental distance and increase connection with the projects through immersive AR platforms.
          </p>
        </div>

        {/* Research Objectives Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Objectives</h2>
          <p className="text-gray-300 mb-4">
            We had two main research objectives:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>To evaluate which of the two interfaces enhanced user immersion and engagement</li>
            <li>To discover usability issues and pain points with both AR experiences</li>
          </ul>
        </div>

        {/* Note on Sampling Strategy */}
        <div className="mb-8 ml-8">
          <h2 className="text-xl font-bold mb-4 text-gray-400">Note on Sampling Strategy</h2>
          <div className="border-l-2 border-gray-700 pl-6">
            <p className="text-gray-300 mb-4 italic text-sm">
              Given time and resource constraints, we opted to conduct initial usability testing with a college student sample. While we acknowledge this as a limitation—particularly given Hope for Haiti's diverse donor base—this approach allowed us to efficiently identify core usability issues. Our decision was based on several considerations:
            </p>
            
            <h3 className="text-lg font-semibold mb-2 text-gray-400">Usability Focus</h3>
            <p className="text-gray-300 mb-4 italic text-sm">
              Our primary goal was to identify fundamental interaction issues with the AR experience, which often manifest regardless of demographic factors.
            </p>
            
            <h3 className="text-lg font-semibold mb-2 text-gray-400">Tech Familiarity</h3>
            <p className="text-gray-300 mb-4 italic text-sm">
              While not representative of all donors, college students provide valuable insights into how tech-savvy users interact with AR interfaces.
            </p>
            
            <h3 className="text-lg font-semibold mb-2 text-gray-400">Efficient Iteration</h3>
            <p className="text-gray-300 mb-4 italic text-sm">
              This approach enabled rapid testing and iteration before expanding to a broader donor population.
            </p>
          </div>
        </div>

        {/* Research Methods Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Methods</h2>
          <h3 className="text-xl font-semibold mb-3">Participants</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Sample Size: 6 participants</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Demographics:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Age Range: 19-27 years</li>
            <li>Gender: 4 Female, 2 Male</li>
            <li>Race/Ethnicity: 5 White/Caucasian, 1 Other</li>
          </ul>
        </div>
        
        {/* Think-Aloud Usability Testing Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Think-Aloud Usability Testing</h2>
          <p className="text-gray-300 mb-4">
            We chose a think-aloud usability testing approach because it allows us to evaluate the behavioral use of our audience and to get their feedback while they use the products. Our data collection process consisted of a 50-minute session where participants:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Interact with both hand and screen touch UIs for 15 minutes each,</li>
            <li>followed by a 20-minute semi-structured interview.</li>
            <li>Interactions documented through video recordings and observation notes</li>
          </ul>
        </div>

        {/* Data Analysis Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Analysis</h2>
          <p className="text-gray-300 mb-4">
            To analyze the data, we realized that an affinity mapping exercise would be the optimal approach. It will enable our team to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Visually cluster and organize the vast amount of user insights.</li>
            <li>Collectively identify emerging patterns and themes in real-time</li>
            <li>Transform individual feedback into actionable insights</li>
          </ul>
        </div>
        
        {/* Findings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Findings</h2>
          
          {/* Findings Image with Caption */}
          <div className="mb-6">
            <a 
              href="https://www.canva.com/design/DAGEysnplyY/CdS9MiGNG2KuABx2sdTWiw/edit?utm_content=DAGEysnplyY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[400px] rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              <Image 
                src="/images/projects/project1/Findings Visualization.png" 
                alt="Affinity map showing the emerging themes from the usability session" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </a>
            <div className="mt-3 text-center">
              <a 
                href="https://www.canva.com/design/DAGEysnplyY/CdS9MiGNG2KuABx2sdTWiw/edit?utm_content=DAGEysnplyY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary text-sm italic transition-colors"
              >
                Click here to view the Affinity map showing the emerging themes from the usability session
              </a>
            </div>
          </div>

          {/* Spatial Interaction Challenges */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Spatial Interaction Challenges</h3>
            <div className="bg-background p-6 rounded-md">
              <p className="text-gray-300 mb-3">
                <span className="font-semibold">Finding:</span> Users struggled with depth perception in virtual hand UI
              </p>
              <div className="border-l-2 border-gray-700 pl-6 mb-4">
                <p className="text-gray-400 italic text-sm">
                  "I almost feel like you have to reach too far to grab it. If it feels too far, it feels closer to, I don't know" (00:09:00)
                </p>
              </div>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Impact:</span> Reduced embodiment and engagement
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Implication:</span> Potential decrease in user immersion and connection
              </p>
            </div>
          </div>

          {/* Environmental Engagement Limitations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Environmental Engagement Limitations</h3>
            <div className="bg-background p-6 rounded-md">
              <p className="text-gray-300 mb-3">
                <span className="font-semibold">Finding:</span> AR environment lacked interactive depth
              </p>
              <div className="border-l-2 border-gray-700 pl-6 mb-4">
                <p className="text-gray-400 italic text-sm">
                  "Um, the classroom's pretty empty, so, maybe like a bookshelf?" (00:02:45 - 00:03:00)
                </p>
              </div>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Impact:</span> Reduced immersion and educational value
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Business Implication:</span> Missed opportunities for user education and emotional connection
              </p>
            </div>
          </div>

          {/* UI Preference Trade-offs */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">UI Preference Trade-offs</h3>
            <div className="bg-background p-6 rounded-md">
              <p className="text-gray-300 mb-3">
                <span className="font-semibold">Finding:</span> Users expressed a clear trade-off between engagement and ease of use across the two interface types
              </p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-300">Hand UI</h4>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">Benefit:</span> A higher sense of presence and engagement
                </p>
                <div className="border-l-2 border-gray-700 pl-6">
                  <p className="text-gray-400 italic text-sm">
                    "I have never seen one where you stick your hand out in front of the device and it puts you in that world, which is pretty cool." (Nate, 00:08:20)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-300">Screen Touch UI</h4>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">Benefit:</span> Reduced cognitive load
                </p>
                <div className="border-l-2 border-gray-700 pl-6">
                  <p className="text-gray-400 italic text-sm">
                    "I think this is better... it's easier to tap for the stones, for the gems." (Marilyn, 00:05:20)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommendations Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
          
          {/* Enhanced Spatial Interface */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">1. Enhanced Spatial Interface</h3>
            <p className="text-gray-300 mb-3">
              We recommend implementing improved depth perception through visual feedback and spatial guides. This will boost user confidence and reduce cognitive load during interactions.
            </p>
            <div className="bg-background p-4 rounded-md">
              <p className="text-gray-300">Key Actions:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                <li>Add visual feedback for interaction zones</li>
                <li>Include spatial guides and tutorials</li>
              </ul>
            </div>
          </div>

          {/* Enriched Environmental Design */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">2. Enriched Environmental Design</h3>
            <p className="text-gray-300 mb-3">
              The AR environment should be enhanced with culturally relevant elements to create a more immersive and educational experience for donors.
            </p>
            <div className="bg-background p-4 rounded-md">
              <p className="text-gray-300">Key Actions:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                <li>Add interactive classroom objects</li>
                <li>Implement storytelling elements</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          {/* Project Impact */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Project Impact</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-300">Strategic Outcomes</h4>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Identified critical areas for AR interface improvement</li>
                <li>Discovered opportunities for gamification</li>
                <li>Provided roadmap for future AR development</li>
              </ul>
            </div>
          </div>

          {/* Reflection */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Reflection</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-300">Process Insights</h4>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>AR usability testing requires unique considerations for spatial interaction</li>
                <li>Think-aloud protocols are particularly effective for understanding spatial confusion</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-300">Personal Growth</h4>
              <p className="text-gray-300 mb-2">This study deepened my understanding of AR interaction patterns and I will say I have developed some expertise in evaluating spatial interfaces.</p>
              <p className="text-gray-300">It also strengthened my ability to connect technical findings to business impact</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-300">UX Tip</h4>
              <div className="border-l-2 border-gray-700 pl-6">
                <p className="text-gray-400 italic text-sm mb-2">
                  When testing AR experiences, pay special attention to the user's physical environment and movement patterns. Unlike traditional interfaces, AR requires consideration of the entire physical space as part of the user experience.
                </p>
                <p className="text-gray-400 italic text-sm">
                  This project demonstrated the importance of balancing technical innovation with user needs in creating meaningful social impact through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 