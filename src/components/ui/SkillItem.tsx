import Image from 'next/image'
import { SkillProps } from '@/types/SkillProps'

const SkillItem = ({ src, alt, width, height, name }: SkillProps) => (
  <div className="flex w-1/2 flex-col items-center p-[0.9375rem] sm:p-0 md:w-1/3 lg:w-1/4">
    <div className="mb-4 flex h-[6.25rem] w-[6.25rem] items-center justify-center">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
    <span className="text-center uppercase text-[#212121]">{name}</span>
  </div>
)

export default SkillItem
