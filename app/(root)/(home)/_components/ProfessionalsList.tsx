import { Button } from "@/components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export function ProfessionalsCarousel() {
	const categories = [
		{
			name: "Kitchen & Bathroom Remodelers",
			image: "/homePage/ideas.jpg"
		},
		{
			name: "Landscape Architects & Designers",
			image: "/homePage/ideas.jpg"
		},
		{
			name: "Landscape Contractors",
			image: "/homePage/ideas.jpg"
		},
		{
			name: "Stone, Pavers & Concrete",
			image: "/homePage/ideas.jpg"
		},
		{
			name: "Swimming Pool Builders",
			image: "/homePage/ideas.jpg"
		},
		{
			name: "Accessory Dwelling Units",
			image: "/homePage/ideas.jpg"
		}
	]
	
	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl md:text-3xl font-bold">Browse Professionals Near You</h1>
				<Button variant="outline" className="hidden sm:flex" asChild>
					<Link href="#">See All</Link>
				</Button>
			</div>
			
			<Carousel
				opts={{
					align: "start",
					slidesToScroll: "auto",
				}}
				className="w-full"
			>
				<CarouselContent>
					{categories.map((category, index) => (
						<CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
							<Link href="#" className="group">
								<div className="relative aspect-video rounded-lg overflow-hidden">
									<Image
										src={category.image}
										alt={category.name}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
									<h3 className="absolute bottom-4 left-4 text-white font-medium text-lg">
										{category.name}
									</h3>
								</div>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-2" />
				<CarouselNext className="right-2" />
			</Carousel>
			
			<Button variant="outline" className="w-full mt-6 sm:hidden" asChild>
				<Link href="#">See All Professionals</Link>
			</Button>
		</div>
	)
}
