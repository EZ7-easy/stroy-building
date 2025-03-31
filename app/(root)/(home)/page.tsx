import { ProfessionalsCarousel } from '@/app/(root)/(home)/_components/ProfessionalsList'
import { RoomsCarousel } from '@/app/(root)/(home)/_components/RoomsCarousel'
import { StoriesCarousel } from '@/app/(root)/(home)/_components/Stories'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

function Page() {
  const navItems = [
    {
      title: "Discover Ideas",
      href: "/discover-ideas",
      imgSrc: "/homePage/ideas.jpg"
    },
    {
      title: "Find Professionals",
      href: "/find-professionals",
      imgSrc: "/homePage/profs.jpg"
    },
    {
      title: "Manage Projects",
      href: "/manage-projects",
      imgSrc: "/homePage/manage.png"
    }
  ]
  
  return (
    <div className="min-h-screen p-4">
      {/* Explore Heading */}
      <h1 className="text-4xl text-center font-medium mt-5 mb-8">Explore</h1>
      
      {/* Navigation with Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {navItems.map((item) => (
          <div key={item.title} className="group">
            <Link href={item.href} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg mb-4 ">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Text Link */}
              <span className={cn(
                "bg-white/90 hover:bg-white text-gray-900 font-medium py-3 px-4 mt-[-65px]",
                "rounded-lg text-center transition-all duration-200",
                "hover:scale-105 transform",
                "text-sm sm:text-base",
                "shadow-md hover:shadow-lg"
              )}>
                {item.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
      
      <ProfessionalsCarousel/>
      <RoomsCarousel/>
      <StoriesCarousel/>
    </div>
  )
}

export default Page
