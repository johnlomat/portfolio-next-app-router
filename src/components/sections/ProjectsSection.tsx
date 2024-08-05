'use client'

import ProjectCard from '@/components/ui/ProjectCard'
import { HeadingTwo } from '@/components/ui/HeadingPreset'
import { projects } from '@/data/projects'

const ProjectsSection = () => {
  return (
    <>
      <section className="relative space-y-20 bg-neutral-900 pt-24" id="projects">
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <HeadingTwo className="border-gray-200 text-gray-200" title="Projects" />
          </div>
        </div>
        <div className="flex w-full flex-col flex-wrap md:flex-row">
          {projects.map((project: any, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsSection
