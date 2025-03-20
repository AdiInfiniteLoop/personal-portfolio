import Image from 'next/image';
import {Badge} from "@/components/badge"

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 ">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center mb-4">
            <Badge className="text-red-500 border-red-500 mr-3">01</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Few things about me</h2>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4"></div>
          </div>


      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-80 rounded-3xl max-w-none">
          <Image
            src="/myphoto.webp"
            alt="Aditya Pradhan"
            height={1000}
            width={1000}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
        <p className="mb-10 max-w-5xl font-Ovo text-lg">
            My coding journey began with <strong>Python</strong> during my early years in programming. 
            The simplicity and elegance of the language fascinated me, and the minor FizzBuzz Problem 
            soon turned into a deep passion for software development. As I explored further, I became 
            intrigued by <strong>problem-solving and algorithmic challenges</strong>, which led me to dive into 
            competitive programming and full-stack development.
            <br /><br />

            I have worked as a <strong>Frontend Engineer Intern</strong> at <strong>Minervaa</strong>, building scalable web applications, 
            and as the <strong>Technical Co-Lead</strong> at <strong>OWASP NIE</strong>, where I organized cybersecurity events and led 
            open-source projects. My dedication to coding also reflects in my competitive programming journey, where 
            I have achieved the <strong>Knight rank</strong> on <strong>LeetCode</strong>, placing within the <strong>top 5.81%</strong> globally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <div>
              <h3 className="font-semibold text-xl mb-2">Education</h3>
              <p>
                🎓 <strong>Bachelor of Engineering</strong> in Computer Science<br />
                The National Institute of Engineering, Mysore<br />
                <strong>CGPA:</strong> 9.45
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">Technologies</h3>
              <p>
                ⚡ <strong>Languages:</strong> TypeScript, C++, Go, Python <br />
                ⚡ <strong>Frontend:</strong> Next.js, Recoil, Zustand, Tailwind CSS <br />
                ⚡ <strong>Backend:</strong> Node.js, Gin , PostgreSQL, MongoDB<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
