import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Experimental A/B Test for Solutions Journalism Approaches | Emmanuel Maduneme',
  description: 'A study on the psychological effects of social media interfaces on user behavior',
}

export default function Project2() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Experimental A/B Test for Solutions Journalism Approaches</h1>
      
      {/* Hero Image */}
      <div className="relative w-full aspect-[1152/648] mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/projects/project2/hero.png" 
          alt="Project hero image showing solutions journalism research" 
          fill
          style={{ objectFit: 'cover' }}
          priority
          unoptimized
        />
      </div>
      
      <div className="bg-card rounded-lg p-6 mb-8">
        {/* Project Overview Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
          <div className="bg-background p-6 rounded-md space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Client & Role</h3>
                <p className="text-gray-300">News Organizations</p>
                <p className="text-gray-300">Academic Researcher</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <p className="text-gray-300">8-16 Weeks</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Methods</h3>
              <p className="text-gray-300">Experimental Methods, Evaluative Research, Survey Design</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-gray-300">Qualtrics, Cloud Research (for recruitment)</p>
            </div>
          </div>
        </div>

        {/* Business Challenge Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Business Challenge</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300">
              News organizations are losing audience engagement due to "doom and gloom" climate coverage. Users also tend to avoid negative climate news because of its impact on their mental well-being, which reduces readership and advertising revenue for news organizations.
            </p>
          </div>
        </div>

        {/* Research Question Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Question</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">So, we had two main research questions:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Does solutions journalism increase readers' positive emotions and their intentions to take pro-environmental action?</li>
              <li>What psychological factors shape this relationship between solutions journalism and intentions to take pro-environmental action</li>
            </ul>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">This matters because:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>News organizations need engaged readers</li>
              <li>Solutions journalism has been proposed as an alternative approach to elicit both social and news-related engagement from news audiences.</li>
            </ul>
          </div>
        </div>

        {/* Secondary Research Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Secondary Research</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">We identified two core psychological factors driving solutions and news and social engagement:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Positive emotions</li>
              <li>Collective efficacy beliefs - group confidence in action</li>
            </ul>
            <p className="text-gray-300 mt-4">Both factors consistently predict sustained engagement and behavior change in environmental contexts.</p>
          </div>
        </div>

        {/* My Role & Impact Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Role & Impact</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">I led a quantitative research design and analysis and managed data collection from 482 participants. Specifically, we:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Chose experimental design to show causation</li>
              <li>We selected our sample after calculating the statistical power</li>
              <li>We then measured behavioral intentions, collective efficacy beliefs, and positive emotions using previously validated measurements</li>
            </ul>
          </div>
        </div>

        {/* Research Approach Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Approach</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">Method: Experimental A/B test</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Independent group post-test experiment</li>
              <li>Random assignment to two conditions:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Solutions-oriented news story (n=243)</li>
                  <li>Problem-oriented news story (n=239)</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">The stories matched the topic of focus (community flood management) with similar visual elements.</p>
          </div>
        </div>

        {/* Research Prototypes Images */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Prototypes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Solutions Story */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-center mb-2">Solutions-Oriented Story</h3>
              <a href="https://www.canva.com/design/DAFebbZphaM/Li7ebzp8mH15c8p5cTRo7Q/edit?utm_content=DAFebbZphaM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block">
                <div className="group relative w-[365px] h-[244px] rounded-lg overflow-hidden mx-auto cursor-pointer">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 bg-black bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold">Click to read full story</p>
                    </div>
                  </div>
                  <Image 
                    src="/images/projects/project2/solutions-story.png" 
                    alt="Solutions-oriented news story prototype" 
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </div>
              </a>
              <p className="text-gray-300 text-center text-sm">Focuses on community flood management success</p>
            </div>
            
            {/* Problem Story */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-center mb-2">Problem-Oriented Story</h3>
              <a href="https://www.canva.com/design/DAFebbZphaM/Li7ebzp8mH15c8p5cTRo7Q/edit?utm_content=DAFebbZphaM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block">
                <div className="group relative w-[365px] h-[244px] rounded-lg overflow-hidden mx-auto cursor-pointer">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 bg-black bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold">Click to read full story</p>
                    </div>
                  </div>
                  <Image 
                    src="/images/projects/project2/problem-story.png" 
                    alt="Problem-oriented news story prototype" 
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </div>
              </a>
              <p className="text-gray-300 text-center text-sm">Highlights flooding challenges and issues</p>
            </div>
          </div>
        </div>

        {/* Why This Method Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why This Method</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">Our choice of experimental A/B testing was driven by several key advantages:</p>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li className="pl-2 -indent-4">The method enables direct comparison between different story approaches, providing clear insights into their effectiveness.</li>
              <li className="pl-2 -indent-4">It generates quantifiable data that can directly inform business decisions about content strategy.</li>
              <li className="pl-2 -indent-4">The experimental design allows us to establish clear causal relationships between content type and user engagement.</li>
              <li className="pl-2 -indent-4">The approach can be easily scaled across different platforms and content types.</li>
            </ul>
          </div>
        </div>

        {/* Analysis Approach Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Analysis Approach</h2>
          <div className="bg-background p-6 rounded-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Methodology</h3>
                <p className="text-gray-300">We conducted a comprehensive path analysis using Lavaan in R programming software. To ensure robust results, we implemented bootstrap confidence interval estimation with 5,000 resamples and controlled for political affiliation as a covariate.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Business Findings</h2>
          <div className="bg-background p-6 rounded-md space-y-6">
            {/* Impact Metrics */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Impact Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-md">
                  <p className="text-primary text-2xl font-bold mb-2">+5%</p>
                  <p className="text-gray-300">Increase in Pro-environmental intentions</p>
                </div>
                <div className="bg-card p-4 rounded-md">
                  <p className="text-primary text-2xl font-bold mb-2">+12%</p>
                  <p className="text-gray-300">Increase in Positive emotions</p>
                </div>
              </div>
            </div>

            {/* T-Test Results Images */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Statistical Analysis Visualization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pro-environmental Intentions T-Test */}
                <div className="space-y-2">
                  <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden mx-auto">
                    <Image 
                      src="/images/projects/project2/T-Test Showing Effects of Stories on Pro-environmental Behavioral Intentions.png" 
                      alt="T-Test results for pro-environmental behavioral intentions" 
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>
                  <p className="text-gray-300 text-center text-sm mt-2">T-Test Showing Effects of Stories on Pro-environmental Behavioral Intentions</p>
                </div>

                {/* Positive Affect T-Test */}
                <div className="space-y-2">
                  <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden mx-auto">
                    <Image 
                      src="/images/projects/project2/T-Test Showing Effects of Stories on Positive Affect.png" 
                      alt="T-Test results for positive affect" 
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>
                  <p className="text-gray-300 text-center text-sm mt-2">T-Test Showing Effects of Stories on Positive Affect (Emotions)</p>
                </div>
              </div>
            </div>

            {/* Engagement Pathways */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Engagement Pathways</h3>
              <p className="text-gray-300 mb-4">Solutions journalism demonstrated positive impact on Pro-environmental Intentions through two main channels:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Enhanced positive emotional responses from readers</li>
                <li>Strengthened collective efficacy beliefs (group confidence in action)</li>
              </ul>
            </div>

            {/* Statistical Impact */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Statistical Impact</h3>
              <div className="bg-card p-4 rounded-md">
                <p className="text-gray-300">We observed a significant indirect effect on Pro-environmental Intentions when mediated by emotion and efficacy, with a total effect size of beta=0.135 (p&lt;.05).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Applications Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Business Applications</h2>
          <div className="bg-background p-6 rounded-md">
            <p className="text-gray-300 mb-4">Our findings provide actionable insights for news organizations:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Content Strategy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Balance problem coverage with solutions</li>
                  <li>Highlight community-level responses</li>
                </ul>
              </div>
              
              <div className="bg-card p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Impact Measurement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Track pro-environmental intentions</li>
                  <li>Monitor audience sentiment</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-card p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Audience Understanding</h3>
              <p className="text-gray-300">
                Using sentiment analysis and efficacy belief surveys helps news organizations better understand their audience needs and engagement patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Research Process Reflection Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Process Reflection</h2>
          <div className="bg-background p-6 rounded-md">
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Key Challenge</h3>
                <p className="text-gray-300">
                  Our main limitation was measuring behavioral intentions rather than actual behaviors.
                </p>
              </div>

              <div className="bg-card p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Future Direction</h3>
                <p className="text-gray-300">
                  To validate our findings, future studies should be conducted in natural settings on live platforms to verify if intentions translate into real actions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <div className="bg-background p-6 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">View Resume</h3>
                <p className="text-gray-300 mb-4">View my complete professional background and experience.</p>
              </div>
              <a 
                href="https://drive.google.com/file/d/1AAW90y5jh3jaUHhOF0Ykyba4v2dY43c1/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 