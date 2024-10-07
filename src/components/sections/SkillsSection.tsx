import { usingNow, learning, otherSkills } from '@/data/skills'
import { HeadingTwo } from '@/components/ui/HeadingPreset'
import SkillItem from '@/components/ui/SkillItem'
import { SkillProps } from '@/types/SkillProps'

const SkillsSection = () => (
  <section className="py-24 font-montserrat" id="skills">
    <div className="container flex flex-wrap space-y-6">
      <div className="flex w-full flex-col items-center space-y-20">
        <HeadingTwo title="Skills" />

        <div className="w-full max-w-[52.75rem] text-left">
          <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 lg:text-left">
            <h3>Using now:</h3>
          </div>
          <div className="flex flex-wrap gap-y-12">
            {usingNow.map((skill: SkillProps, index: number) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[52.75rem] text-left">
          <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 lg:text-left">
            <h3>Learning:</h3>
          </div>
          <div className="flex flex-wrap gap-y-12">
            {learning.map((skill: SkillProps, index: number) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[52.75rem] text-left">
          <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 lg:text-left">
            <h3>Other skills:</h3>
          </div>
          <div className="flex flex-wrap gap-y-12">
            {otherSkills.map((skill: SkillProps, index: number) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SkillsSection
